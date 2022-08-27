import React, {useState} from 'react';
import {View, ScrollView, TextInput, Pressable, Text} from 'react-native';
import dayjs from 'dayjs';
import {useStyles} from './plan.styles';
import {useNotes} from '../../constate';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Item} from './components';

export const Plan = () => {
  const styles = useStyles();
  const [newInput, setNewInput] = useState<string>('');
  const {notes, addNotes, counter} = useNotes();
  const disabledAdd = newInput.length === 0;

  const handleAdd = () => {
    const temp = {
      id: counter,
      note: newInput,
      date: dayjs(),
    };
    addNotes(temp);
    setNewInput('');
  };

  return (
    <View style={styles.main}>
      <TextInput
        value={newInput}
        onChangeText={text => setNewInput(text)}
        placeholder={'Co chciałabyś zapisać baryło?'}
        style={styles.input}
        multiline
      />
      <Text style={styles.tip}>Przytrzymaj notkę aby usunąć</Text>
      <View style={styles.divider} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {notes.map(item => (
          <Item key={item.id.toString()} item={item} />
        ))}
      </ScrollView>
      <Pressable
        style={[styles.pressable, {opacity: disabledAdd ? 0.4 : 1}]}
        onPress={handleAdd}
        disabled={disabledAdd}>
        <Icon name="add" style={styles.icon} size={24} />
      </Pressable>
    </View>
  );
};
