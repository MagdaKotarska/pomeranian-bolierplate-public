import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';

import { welcomeViewRouterMetaData } from './WelcomeView/router-data';

import { SubRouteExercise1 } from './Exercise1/router-data';
import { SubRouteExercise2 } from './Exercise2/router-data';
import { SubRouteExercise3 } from './Exercise3/router-data';
import { SubRouteExercise4 } from './Exercise4/router-data';
import { SubRouteExercise5 } from './Exercise5/router-data';
import { MaterialUIBasicElementsMetaData } from './MaterialUIBasicElements/router-data';
import { MUITemplateDashboardMetaData } from './MUITemplateDashboard/router-data';
import { SideEffectsData } from './SideEffects/router-data';
import { TodoListMetaData } from './TodoList/router-data';
import { UseRefMetaData } from './UseRef/router-data';
import { FormsMetaData } from './Forms/router-data';
import { FormsValidationMetaData } from './FormsValidation/router-data';

export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  welcomeViewRouterMetaData,
  SubRouteExercise1,
  SubRouteExercise2,
  SubRouteExercise3,
  SubRouteExercise4,
  SubRouteExercise5,
  SideEffectsData,
  MaterialUIBasicElementsMetaData,
  MUITemplateDashboardMetaData,
  TodoListMetaData,
  UseRefMetaData,
  FormsMetaData,
  FormsValidationMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
