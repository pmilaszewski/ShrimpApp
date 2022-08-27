import {useState, useEffect} from 'react';
import constate from 'constate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TNote} from '../screens/Plan/components/item.types';

const useNotesContext = () => {
  const [notes, setNotes] = useState<TNote[]>([]);
  const [counter, setCounter] = useState<number>(0);

  const addNotes = (value: TNote) => {
    setNotes([value, ...notes]);
    setCounter(_prev => _prev + 1);
  };

  const getNotes = async () => {
    const jsonValue = await AsyncStorage.getItem('notes');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  const getCounter = async () => {
    const jsonValue = await AsyncStorage.getItem('notesCounter');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  };

  useEffect(() => {
    getNotes().then(res => !!res && setNotes([...res]));
    getCounter().then(res => !!res && setCounter(res));
  }, []);

  useEffect(() => {
    const jsonValue = JSON.stringify(notes);
    AsyncStorage.setItem('notes', jsonValue);
  }, [notes]);

  useEffect(() => {
    const jsonValue = JSON.stringify(counter);
    AsyncStorage.setItem('notesCounter', jsonValue);
  }, [counter]);

  return {notes, addNotes, setNotes, counter};
};

export const [NotesProvider, useNotes] = constate(useNotesContext);
