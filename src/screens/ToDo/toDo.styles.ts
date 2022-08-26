import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: colors.background,
      flex: 1,
    },
    header: {
      fontSize: 20,
      color: colors.darkGrey,
      padding: 20,
      fontFamily: fonts.bold,
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    input: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      ontFamily: fonts.regular,
      borderBottomColor: colors.darkPink,
      borderBottomWidth: 1,
      minWidth: '50%',
      maxWidth: '90%',
    },
    pressable: {
      padding: 8,
    },
    icon: {
      color: colors.darkPink,
    },
    todosContainer: {
      padding: 20,
    },
    todos: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    todosText: {
      marginLeft: 8,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
