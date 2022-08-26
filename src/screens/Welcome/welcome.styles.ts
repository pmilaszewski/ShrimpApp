import {StyleSheet} from 'react-native';

export const useStyles = () =>
  StyleSheet.create({
    main: {
      backgroundColor: 'rgba(244,212,252,1)',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 300,
      width: 300,
    },
  });
