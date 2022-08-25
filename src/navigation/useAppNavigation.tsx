import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from './navigation.types';

type ScreenProp = StackNavigationProp<RootStackParamList>;

export const useAppNavigation = () => {
  const {navigate, goBack} = useNavigation<ScreenProp>();

  return {navigate, goBack};
};
