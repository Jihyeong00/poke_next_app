import {useRouter} from 'next/navigation';
import UsePokeInfoQuery from '@/hooks/usePokeInfoQuery';
import UsePokeMoreInfoQuery from '@/hooks/usePokeMoreInfoQuery';
import typeColors from "@/theme/typeColor";

const PokeCard = (props: { url: string; index: string }) => {
    const {pokeIsLoading, pokeData} = UsePokeInfoQuery(props.index);
    const {imageData, imgIsLoading} = UsePokeMoreInfoQuery(props.url);

    const router = useRouter();

    if (imgIsLoading || pokeIsLoading) {
        return <>로딩중</>;
    }

    const {id, names, genera} = pokeData!;

    const kr_genera = genera.filter((data) => data.language.name === 'ko')[0]
        .genus;
    const kr_name = names.filter((data) => data.language.name === 'ko')[0].name;
    const en_type = imageData?.types.map((v) => v.type.name)!;

    return (
        <li
            onClick={() => router.push(`/detail/${id}`)}
            className={
                'relative flex cursor-pointer flex-col items-center justify-center p-2'
            }
        >
            <div className={'absolute z-20 h-full w-full bg-white'}/>
            <div
                className={`absolute right-2.5 top-2.5 z-30 px-2.5 text-xs bg-[${typeColors[en_type[0]].background}] text-[${typeColors[en_type[0]].color}]`}
            >
                {kr_genera}
            </div>
            <div
                className={'relative z-30 flex flex-col items-center justify-center'}
            >
                <div className={'mt-3 flex h-24 w-24 items-center justify-center'}>
                    <img
                        src={
                            imageData!.sprites.versions['generation-v']['black-white']
                                .animated.front_default
                        }
                        alt={kr_name}
                    />
                </div>
                <div className={'flex gap-1'}>
                    {en_type.map((v) => (
                        <div
                            style={{backgroundColor:typeColors[v].background, color:typeColors[v].color}}
                            key={v}
                            className={`rounded-lg p-1 text-xs font-bold capitalize`}
                        >
                            {v}
                        </div>
                    ))}
                </div>
                <div className={'text-l mt-2 font-sans font-bold'}>{kr_name}</div>
            </div>
        </li>
    );
};

export default PokeCard;
