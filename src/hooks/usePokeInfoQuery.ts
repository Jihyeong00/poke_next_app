import useSWR from 'swr';
import { PokeDetailType } from '@/type/poke';
import { BASE_URL, END_POINT } from '@/constants/apis';
import { fetcher } from '@/utils/fetcher';

const UsePokeInfoQuery = (index: string) => {
  const { data: pokeData, isLoading: pokeIsLoading } = useSWR<PokeDetailType>(
    BASE_URL + END_POINT.SPECIES + '/' + index,
    fetcher
  );

  return { pokeData, pokeIsLoading };
};

export default UsePokeInfoQuery;
