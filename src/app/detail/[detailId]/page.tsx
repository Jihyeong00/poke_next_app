'use client';

import UsePokeInfoQuery from '@/hooks/usePokeInfoQuery';
import UsePokeMoreInfoQuery from '@/hooks/usePokeMoreInfoQuery';
import { BASE_URL, END_POINT } from '@/constants/apis';
import typeColors from '@/theme/typeColor';

type Params = {
  detailId: string;
};

const DetailPage = ({ params }: { params: Params }) => {
  const { pokeData, pokeIsLoading } = UsePokeInfoQuery(params.detailId);
  const { imageData, imgIsLoading } = UsePokeMoreInfoQuery(
    BASE_URL + END_POINT.POKE + '/' + params.detailId
  );

  if (pokeIsLoading || imgIsLoading) return <></>;

  const { names, flavor_text_entries } = pokeData!;

  const { front_default, back_default, front_shiny, back_shiny } =
    imageData!.sprites.versions['generation-v']['black-white'].animated;

  const en_type = imageData?.types.map((v) => v.type.name)!;
  const kr_name = names.filter((data) => data.language.name === 'ko')[0].name;
  const kr_FlavorText = flavor_text_entries.filter(
    (data) => data.language.name === 'ko'
  );

  return (
    <section className={'relative flex justify-center'}>
      <div className={'w-[1040px] p-5'}>
        <div
          className={
            'relative z-30 flex flex-col items-center justify-center px-2.5'
          }
        >
          <div
            className={
              'm-5 flex w-1/2 flex-col items-center overflow-hidden rounded-xl bg-white p-5'
            }
          >
            <table>
              <thead>
                <tr>
                  <td>
                    <img src={front_default} alt={kr_name} width={200} />
                  </td>
                  <td>
                    <img src={back_default} alt={kr_name} width={200} />
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={'text-center'}>앞모습</td>
                  <td className={'text-center'}>뒷모습</td>
                </tr>
                <tr>
                  <td>
                    <img src={front_shiny} alt={kr_name} width={200} />
                  </td>
                  <td>
                    <img src={back_shiny} alt={kr_name} width={200} />
                  </td>
                </tr>
                <tr>
                  <td className={'text-center'}>이로치 앞모습</td>
                  <td className={'text-center'}>이로치 뒷모습</td>
                </tr>
              </tbody>
            </table>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <div
                style={{
                  backgroundColor: typeColors[en_type[0]].background,
                  color: typeColors[en_type[0]].color,
                }}
                className={'relative mt-3.5 w-3/4 text-center capitalize'}
              >
                {kr_name}
              </div>
              {en_type.map((v) => (
                <div
                  key={v}
                  style={{
                    backgroundColor: typeColors[v].background,
                    color: typeColors[v].color,
                  }}
                  className={'relative mt-3.5 w-3/4 text-center capitalize'}
                >
                  {v}
                </div>
              ))}
            </div>
            <div className={'mt-5'}>
              {kr_FlavorText.map((v) => (
                <div key={v.version.name}>
                  <div className={'w-full text-center font-bold'}>
                    {v.version.name}
                  </div>
                  <div className={'mb-2'}>{v.flavor_text}</div>
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
