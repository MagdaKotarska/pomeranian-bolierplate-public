import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBoolean } from './Boolean/router-data';
import { blockRouterMetaData as blockRouterMetaDataEmptyValuesAndComments } from './EmptyValuesAndComments/router-data';
import { blockRouterMetaData as blockRouterMetaDataDateTime } from './DateTime/router-data';
import { blockRouterMetaData as blockRouterMetaDataArray } from './Array/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBoolean,
  blockRouterMetaDataEmptyValuesAndComments,
  blockRouterMetaDataDateTime,
  blockRouterMetaDataArray,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
