'use client';

import { fetcher } from '@/utils/fetcher';
import { BASE_URL, END_POINT } from '@/constants/apis';
import useSWRInfinite from 'swr/infinite';
import PokeCard from '@/components/Common/PokeCard';
import { IApiInfo } from '@/type/poke';

export interface IPokeList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IApiInfo[];
}

const getKey = (pageIndex: number, previousPageData: IPokeList) => {
  if (pageIndex === 0) return BASE_URL + END_POINT.POKE;
  return previousPageData.next;
};

const DocumentPageMain = () => {
  const { data, size, setSize } = useSWRInfinite<IPokeList>(getKey, fetcher);
  const pokeList = data
    ?.map((_) => _.results)
    .flat()
    .map((v, i) => {
      return { ...v, id: String(++i) };
    });
  return (
    <main>
      <button onClick={() => setSize(size + 1)}>가져오기</button>
      <ul
        className={
          'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-5'
        }
      >
        {pokeList?.map((v) => <PokeCard key={v.id} url={v.url} index={v.id} />)}
      </ul>
    </main>
  );
};

export default DocumentPageMain;
