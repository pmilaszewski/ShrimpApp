import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      flex: 1,
    },
    header: {
      flexDirection: 'row',
    },
    pressable: {
      width: '50%',
      paddingVertical: 20,
      alignItems: 'center',
      backgroundColor: colors.lightPink,
      opacity: 0.6,
    },
    pressableChecked: {
      width: '50%',
      paddingVertical: 20,
      alignItems: 'center',
      borderBottomColor: colors.darkPink,
      borderBottomWidth: 2,
      backgroundColor: colors.lightPink,
    },
    pressableText: {
      fontSize: 20,
      fontFamily: fonts.regular,
      color: colors.lightGrey,
    },
    pressableTextChecked: {
      fontSize: 20,
      fontFamily: fonts.bold,
      color: colors.darkPink,
    },
    image: {
      height: 300,
      width: 300,
      borderRadius: 16,
      backgroundColor: colors.lightGrey,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      alignItems: 'center',
      marginBottom: 20,
    },
    button: {
      paddingVertical: 20,
      width: '80%',
      backgroundColor: colors.lightPink,
      borderRadius: 16,
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 20,
      fontFamily: fonts.bold,
      color: colors.darkPink,
    },
  });
