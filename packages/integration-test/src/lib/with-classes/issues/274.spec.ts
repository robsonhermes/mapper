import { AutoMap } from '@automapper/classes';
import { setupClasses } from '../../setup.spec';

describe('Issue 274', () => {
  enum SearchConditionType {
    AND = 'AND',
    OR = 'OR',
  }

  class SearchConditionElement {
    @AutoMap()
    name: string;
  }

  class SearchConditionElementDto {
    @AutoMap()
    name: string;
  }

  class SearchConditionDto {
    @AutoMap(() => SearchConditionElementDto)
    texts: SearchConditionElementDto[];

    @AutoMap(() => String)
    conditionType: SearchConditionType;
  }

  class SearchCondition {
    @AutoMap(() => SearchConditionElement)
    texts: SearchConditionElement[];

    @AutoMap()
    conditionType: SearchConditionType;
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
    mapper.createMap(SearchConditionElementDto, SearchConditionElement);
    mapper.createMap(SearchConditionDto, SearchCondition);
    mapper.createMap(SearchConditionsDto, SearchConditions);
    mapper.createMap(SearchDto, Search);
  });

  it('should map', () => {
    const dto = {
      conditions: {
        includeTexts: {
          conditionType: 'OR',
          texts: [
            {
              name: 'Portfolio Turnover:',
            },
          ],
        },
        excludeTexts: {
          conditionType: 'OR',
          texts: [],
        },
        includeTags: {
          conditionType: 'OR',
          texts: [],
        },
        excludeTags: {
          conditionType: 'OR',
          texts: [],
        },
      },
      sectionElement: '',
      docType: '',
      searchName: 'SECT_Portfolio_Turnover',
      hasUpdateTotalSearch: true,
    };

    const search = mapper.map(dto, Search, SearchDto);
    console.log(search);
    expect(search).toBeTruthy();
  });
});
