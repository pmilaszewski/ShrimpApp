import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      flex: 1,
      padding: 20,
    },
    icon: {
      color: colors.white,
    },
    pressable: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 48,
      width: 48,
      backgroundColor: colors.darkPink,
      borderRadius: 100,
      position: 'absolute',
      bottom: 20,
      right: 20,
    },
    input: {
      fontFamily: fonts.regular,
      color: colors.darkGrey,
      backgroundColor: colors.white,
      borderRadius: 10,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    divider: {
      width: '100%',
      height: 1,
      borderRadius: 10,
      backgroundColor: colors.darkPink,
      marginVertical: 20,
    },
    tip: {
      fontSize: 12,
      fontFamily: fonts.regular,
      color: colors.darkPink,
      marginTop: 20,
      marginBottom: -16,
    },
    scrollView: {
      marginVertical: -20,
    },
    scrollViewContent: {
      paddingVertical: 20,
    },
  });
