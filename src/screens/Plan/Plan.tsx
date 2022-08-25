import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from './plan.styles';

export const Plan = () => {
  const styles = useStyles();
  return (
    <View style={styles.main}>
      <Text>Plan</Text>
    </View>
  );
};
