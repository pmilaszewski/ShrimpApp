import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

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
      borderRadius: 16,
      backgroundColor: colors.lightGrey,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontFamily: fonts.regular,
      color: colors.darkGrey,
      textAlign: 'center',
    },
    title: {
      fontSize: 32,
      fontFamily: fonts.bold,
      marginVertical: 20,
      color: colors.darkPink,
    },
    link: {
      fontSize: 16,
      fontFamily: fonts.regular,
      color: colors.darkPink,
    },
    bottomContainer: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
  });
