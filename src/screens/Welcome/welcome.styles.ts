import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 300,
      width: 300,
    },
  });
