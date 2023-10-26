import useSWR from 'swr';
import { IPokeFormData } from '@/type/poke';
import { fetcher } from '@/utils/fetcher';

const UsePokeMoreInfoQuery = (url: string) => {
  const { data: imageData, isLoading: imgIsLoading } = useSWR<IPokeFormData>(
    url,
    fetcher
  );
  return { imageData, imgIsLoading };
};

export default UsePokeMoreInfoQuery;
