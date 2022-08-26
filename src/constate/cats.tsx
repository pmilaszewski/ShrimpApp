import {useState, useEffect} from 'react';
import constate from 'constate';
import {useQuery} from 'react-query';
import {getCats} from '../api/endpoints';

type Cats = {
  height: number;
  id: string;
  url: string;
  width: number;
};

const useCatsContext = () => {
  const [cats, setCats] = useState<Cats[]>([]);
  const query = useQuery('cats', getCats);
  const refetch = async () => await query.refetch();
  const {data, isLoading, isRefetching, error} = query;

  useEffect(() => {
    data && setCats([...data]);
  }, [data]);

  useEffect(() => {
    error && console.warn(error);
  }, [error]);

  return {cats, loading: isLoading || isRefetching, refetch};
};

export const [CatsProvider, useCats] = constate(useCatsContext);
