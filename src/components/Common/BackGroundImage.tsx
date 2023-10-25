import React from 'react';
import pokeBackImage from '@/assets/png/PokéBackImage.png';
import Image from 'next/image';

const BackGroundImage = () => (
  <Image
    className={'top-top-top-10% fixed z-10 h-screen w-full opacity-30'}
    src={pokeBackImage}
    alt={'배경이미지'}
  />
);

export default BackGroundImage;
