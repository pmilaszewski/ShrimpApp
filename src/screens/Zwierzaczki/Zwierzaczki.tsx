import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from './zwierzaczki.styles';

export const Zwierzaczki = () => {
  const styles = useStyles();
  return (
    <View style={styles.main}>
      <Text>Zwierzaczki</Text>
    </View>
  );
};
