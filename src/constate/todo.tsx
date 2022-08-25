import {useState, useEffect} from 'react';
import constate from 'constate';
import {useQuery} from 'react-query';

const useToDoContext = () => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  // const query = useQuery('dataUID', getData);
  // const refetch = async () => await query.refetch();
  // const {isLoading, error, mutate} = refetch;

  // useEffect(() => {
  //   error && console.warn(error);
  // }, [error]);

  return {name, setName, age, setAge};
};

export const [ToDoProvider, useToDo] = constate(useToDoContext);
