import type { CreateMapOptions, Mapping } from '@automapper/types';
import { MappingClassId } from '@automapper/types';
import { isDefined } from '../utils';
import { extendMappings } from './extend-mappings.util';
import { getFlatteningSourcePaths } from './get-flattening-source-paths.util';
import { getNamingConventionsFromOptions } from './get-naming-conventions-from-options.util';
import { getNestedMetaKeyAtDestinationPath } from './get-nested-metakey-at-destination-path.util';
import { getPathRecursive } from './get-path-recursive.util';
import { getSourcePropertyPath } from './get-source-property-path.util';
import { mapInitialize } from './map-initialize';

function defaultIsMultipartSourcePathsInSource(
  multipartSourcePaths: string[],
  sourceObj: Record<string, unknown>
): boolean {
  return !(
    multipartSourcePaths.length > 1 &&
    (!sourceObj.hasOwnProperty(multipartSourcePaths[0]) ||
      (sourceObj[multipartSourcePaths[0]] &&
        typeof sourceObj[multipartSourcePaths[0]] === 'object'))
  );
}

function defaultIsDestinationPathOnSource(
  sourceObj: Record<string, unknown>,
  sourcePath: string[]
): boolean {
  return sourcePath.length === 1 && sourceObj.hasOwnProperty(sourcePath[0]);
}

interface CreateInitialMappingOptions {
  isMultipartSourcePathsInSource?: (
    multipartSourcePaths: string[],
    sourceObj: unknown
  ) => boolean;
  isDestinationPathOnSource?: (
    sourceObj: unknown,
    sourcePath: string[]
  ) => boolean;
  isMetadataNullAtKey?: (key: string[]) => boolean;
  prePropertiesLoop?: (mapping: Mapping) => void;
}

export function createInitialMapping(
  sourceObj: Record<string, unknown>,
  destinationObj: Record<string, unknown>,
  sourceNestedMetadataMap: unknown[],
  destinationNestedMetadataMap: unknown[],
  saveMapping: (mapping: Mapping) => void,
  options?: CreateMapOptions,
  createInitialMappingOptions?: CreateInitialMappingOptions
): Mapping {
  const {
    isMultipartSourcePathsInSource = defaultIsMultipartSourcePathsInSource,
    isDestinationPathOnSource = defaultIsDestinationPathOnSource,
    isMetadataNullAtKey = () => false,
    prePropertiesLoop,
  } = createInitialMappingOptions ?? {};
  const { extends: bases = [], namingConventions: conventions } = options ?? {};

  const mapping: Mapping = [
    [sourceObj, destinationObj],
    [],
    [],
    getNamingConventionsFromOptions(conventions),
    undefined,
  ];

  if (prePropertiesLoop) {
    prePropertiesLoop(mapping);
  }

  const destinationPaths = getPathRecursive(destinationObj) || [];
  const namingConventions = mapping[MappingClassId.namingConventions];
  for (let i = 0; i < destinationPaths.length; i++) {
    const destinationPath = destinationPaths[i];
    const destinationNestedMetadataAtPath = getNestedMetaKeyAtDestinationPath(
      destinationNestedMetadataMap,
      sourceNestedMetadataMap,
      destinationPath,
      namingConventions
    );

    const sourcePath = getSourcePropertyPath(
      destinationPath,
      namingConventions
    );

    if (!isMultipartSourcePathsInSource(sourcePath, sourceObj)) {
      continue;
    }

    // With namingConventions, flattening can happen
    if (
      !isDestinationPathOnSource(sourceObj, sourcePath) &&
      isDefined(namingConventions)
    ) {
      const sourcePaths = getFlatteningSourcePaths(
        sourceObj,
        sourcePath,
        namingConventions!
      );

      if (!isDefined(sourcePaths)) {
        continue;
      }

      mapping[MappingClassId.properties].push([
        destinationPath,
        [
          [destinationPath],
          [mapInitialize(sourcePaths!), isMetadataNullAtKey(destinationPath)],
        ],
        destinationNestedMetadataAtPath,
      ]);
      continue;
    }

    // Skip if there's no destinationPath on source
    if (!isDestinationPathOnSource(sourceObj, sourcePath)) {
      continue;
    }

    mapping[MappingClassId.properties].push([
      destinationPath,
      [
        [destinationPath, sourcePath],
        [mapInitialize(sourcePath), isMetadataNullAtKey(destinationPath)],
      ],
      destinationNestedMetadataAtPath,
    ]);
  }

  // Inherit base mappings
  extendMappings(bases, mapping);

  saveMapping(mapping);

  return mapping;
}
