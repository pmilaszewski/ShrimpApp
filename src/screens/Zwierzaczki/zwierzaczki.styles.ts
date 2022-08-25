import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      flex: 1,
    },
  });
