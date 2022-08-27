import React from 'react';
import {Pressable, Text, Alert} from 'react-native';
import dayjs from 'dayjs';
import {IItem} from './item.types';
import {useStyles} from './item.styles';
import {useNotes} from '../../../constate';

export const Item = ({item}: IItem) => {
  const styles = useStyles();
  const {notes, setNotes} = useNotes();

  const onDeletePress = () => {
    Alert.alert('Chcesz usunąć notkę?', '', [
      {style: 'destructive', text: 'Nope'},
      {style: 'default', text: 'Tat', onPress: removeNote},
    ]);
  };

  const removeNote = () => {
    setNotes([...notes.filter(value => item.id !== value.id)]);
  };

  return (
    <Pressable style={styles.main} onLongPress={onDeletePress}>
      <Text style={styles.text}>{item.note}</Text>
      <Text style={styles.date}>
        {dayjs(item.date).format('DD-MM-YYYY, HH:mm')}
      </Text>
    </Pressable>
  );
};
