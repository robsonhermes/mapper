import { AutoMap } from '@automapper/classes';
import { setupClasses } from '../../setup.spec';

describe('Issue 274', () => {
  class SearchConditionDto {
    @AutoMap()
    condition: string;
  }

  class SearchCondition {
    @AutoMap()
    condition: string;
  }

  class SearchConditionsDto {
    @AutoMap(() => SearchConditionDto)
    includeTexts: SearchConditionDto;

    @AutoMap(() => SearchConditionDto)
    excludeTexts: SearchConditionDto;

    @AutoMap(() => SearchConditionDto)
    includeTags: SearchConditionDto;

    @AutoMap(() => SearchConditionDto)
    excludeTags: SearchConditionDto;
  }

  class SearchConditions {
    @AutoMap(() => SearchCondition)
    includeTexts: SearchCondition;

    @AutoMap(() => SearchCondition)
    excludeTexts: SearchCondition;

    @AutoMap(() => SearchCondition)
    includeTags: SearchCondition;

    @AutoMap(() => SearchCondition)
    excludeTags: SearchCondition;
  }

  class SearchDto {
    @AutoMap(() => SearchConditionsDto)
    conditions: SearchConditionsDto;

    @AutoMap()
    sectionElement: string;

    @AutoMap()
    docType: string;

    @AutoMap()
    searchName: string;

    @AutoMap()
    hasUpdateTotalSearch: boolean;
  }

  class Search {
    @AutoMap(() => SearchConditions)
    conditions: SearchConditions;

    @AutoMap()
    sectionElement: string;

    @AutoMap()
    docType: string;

    @AutoMap()
    searchName: string;

    @AutoMap()
    hasUpdateTotalSearch: boolean;
  }

  const [mapper] = setupClasses('274');

  beforeEach(() => {
    mapper.createMap(SearchConditionDto, SearchCondition);
    mapper.createMap(SearchConditionsDto, SearchConditions);
    mapper.createMap(SearchDto, Search);
  });

  it('should map', () => {
    const dto = new SearchDto();
    dto.docType = 'docType';
    dto.hasUpdateTotalSearch = true;
    dto.searchName = 'searchName';
    dto.sectionElement = 'sectionElement';

    const condition = new SearchConditionDto();
    condition.condition = 'condition';

    dto.conditions = new SearchConditionsDto();
    dto.conditions.excludeTags = condition;
    dto.conditions.excludeTexts = condition;
    dto.conditions.includeTags = condition;
    dto.conditions.includeTexts = condition;

    const search = mapper.map(dto, Search, SearchDto);
    console.log(search);
    expect(search).toBeTruthy();
  });
});
