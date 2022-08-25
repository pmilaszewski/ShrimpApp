import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from './pimpek.styles';

export const Pimpek = () => {
  const styles = useStyles();

  return (
    <View style={styles.main}>
      <Text>Pimpek</Text>
    </View>
  );
};
