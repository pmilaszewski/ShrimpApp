import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';

export type TabParamList = {
  ToDo: undefined;
  Zwierzaczki: undefined;
  Pimpek: undefined;
  Plan: undefined;
};

export type MainParamList = {
  Welcome: undefined;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainParamList>;
  Tab: NavigatorScreenParams<TabParamList>;
};

export type MainRouteProps<RouteName extends keyof MainParamList> = RouteProp<
  MainParamList,
  RouteName
>;
