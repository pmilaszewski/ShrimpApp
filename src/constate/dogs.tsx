import {useState, useEffect} from 'react';
import constate from 'constate';
import {useQuery} from 'react-query';
import {getDogs} from '../api/endpoints';

type Dogs = {
  height: number;
  id: string;
  url: string;
  width: number;
};

const useDogsContext = () => {
  const [dogs, setDogs] = useState<Dogs[]>([]);
  const query = useQuery('dogs', getDogs);
  const refetch = async () => await query.refetch();
  const {data, isLoading, error, isRefetching} = query;

  useEffect(() => {
    data && setDogs([...data]);
  }, [data]);

  useEffect(() => {
    error && console.warn(error);
  }, [error]);

  return {dogs, loading: isLoading || isRefetching, refetch};
};

export const [DogsProvider, useDogs] = constate(useDogsContext);
