import React from 'react';
import Image from 'next/image';
import pokeLogo from '@/assets/png/PokéLogo.png';
import Link from 'next/link';

const HeaderLogo = () => {
  return (
    <Link className={'Logo'} href={'/'}>
      <Image className={'h-12 w-40'} src={pokeLogo} alt={'배경이미지'} />
    </Link>
  );
};

export default HeaderLogo;
