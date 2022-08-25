import React from 'react';
import {View, Text} from 'react-native';
import {useStyles} from './toDo.styles';

export const ToDo = () => {
  const styles = useStyles();
  return (
    <View style={styles.main}>
      <Text>ToDo</Text>
    </View>
  );
};
