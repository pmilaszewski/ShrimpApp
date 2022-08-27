import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../../utils';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
    text: {
      fontSize: 16,
      fontFamily: fonts.regular,
      color: colors.darkGrey,
    },
    date: {
      fontSize: 12,
      fontFamily: fonts.regular,
      color: colors.lightGrey,
      textAlign: 'right',
      marginTop: 8,
    },
  });
