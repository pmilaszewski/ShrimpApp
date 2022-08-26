import {useState, useEffect} from 'react';
import constate from 'constate';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type TODO = {
  id: number;
  title: string;
  done: boolean;
};

const useToDoContext = () => {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const addTodos = (value: TODO) => {
    setTodos([value, ...todos]);
    setCounter(_prev => _prev + 1);
  };

  const getTodos = async () => {
    const jsonValue = await AsyncStorage.getItem('todos');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  const getCounter = async () => {
    const jsonValue = await AsyncStorage.getItem('counter');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  useEffect(() => {
    getTodos().then(res => !!res && setTodos([...res]));
    getCounter().then(res => !!res && setCounter(res));
  }, []);

  useEffect(() => {
    const jsonValue = JSON.stringify(todos);
    AsyncStorage.setItem('todos', jsonValue);
  }, [todos]);

  useEffect(() => {
    const jsonValue = JSON.stringify(counter);
    AsyncStorage.setItem('counter', jsonValue);
  }, [counter]);

  return {todos, addTodos, setTodos, counter};
};

export const [ToDoProvider, useToDo] = constate(useToDoContext);
