import React from 'react';
import pokeBackImage from "@/assets/png/PokéBackImage.png";
import Image from "next/image";

const BackGroundImage = () => (
    <Image
        className={'fixed top-top-top-10% opacity-30 h-screen w-full z-10'}
        src={pokeBackImage}
        alt={'배경이미지'}/>
);

export default BackGroundImage;