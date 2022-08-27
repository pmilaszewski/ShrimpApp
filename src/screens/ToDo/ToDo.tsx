/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import {useToDo} from '../../constate';

import {useStyles} from './toDo.styles';
import {colors} from '../../utils';

export type TODO = {
  id: number;
  title: string;
  done: boolean;
};

export const ToDo = () => {
  const styles = useStyles();
  const [newTodo, setNewTodo] = useState<string>('');
  const [isSomethingDone, setIsSomethingDone] = useState<boolean>(false);
  const {todos, addTodos, setTodos, counter} = useToDo();
  const disabledAdd = newTodo.length === 0;

  const onComplete = (item: TODO, checked: boolean) => {
    const index = todos.findIndex(value => value.id === item.id);
    todos[index].done = checked;
    const temp = todos.findIndex(todo => todo.done);
    setTodos([...todos]);
    setIsSomethingDone(temp !== -1);
  };

  const removeAllCompleted = () => {
    setTodos([...todos.filter(item => !item.done)]);
  };

  const onDeletePress = () => {
    Alert.alert('Chcesz usunąć wszystkie wykonane zadania?', '', [
      {style: 'destructive', text: 'Nope'},
      {style: 'default', text: 'Tat', onPress: removeAllCompleted},
    ]);
  };

  const renderTodos = (item: TODO) => (
    <View style={styles.todos} key={item.id.toString()}>
      <CheckBox
        onTintColor={colors.darkPink}
        onCheckColor={colors.darkPink}
        value={item.done}
        onValueChange={checked => onComplete(item, checked)}
      />
      <Text style={styles.todosText}>{item.title}</Text>
    </View>
  );

  const handleAdd = () => {
    const temp = {
      id: counter,
      title: newTodo,
      done: false,
    };
    addTodos(temp);
    setNewTodo('');
  };

  const isSelected = useCallback(() => {
    const index = todos.findIndex(item => item.done);
    setIsSomethingDone(index !== -1);
  }, [todos]);

  useEffect(() => {
    isSelected();
  }, [isSelected]);

  return (
    <View style={styles.main}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Co ja znowu muszę zrobić???</Text>
        {isSomethingDone && (
          <Pressable onPress={onDeletePress} style={styles.pressable}>
            <Icon name="delete" style={styles.icon} size={24} />
          </Pressable>
        )}
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder={'Dodaj bojowe zadanie'}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          multiline
        />
        <Pressable
          style={[styles.pressable, {opacity: disabledAdd ? 0.4 : 1}]}
          onPress={handleAdd}
          disabled={disabledAdd}>
          <Icon name="add" style={styles.icon} size={24} />
        </Pressable>
      </View>
      <ScrollView style={styles.todosContainer}>
        {todos.map(item => renderTodos(item))}
      </ScrollView>
    </View>
  );
};
