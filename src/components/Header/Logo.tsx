'use client';
import React from 'react';
import Image from 'next/image';
import pokeLogo from '@/assets/png/PokéLogo.png';
import Link from 'next/link';
import { thisHref } from '@/store/category';
import { useSetAtom } from 'jotai/react';

const HeaderLogo = () => {
  const setState = useSetAtom(thisHref);
  const linkMainPageAction = () => {
    setState('/main');
  };
  return (
    <Link onClick={linkMainPageAction} className={'Logo'} href={'/'}>
      <Image className={'h-12 w-40'} src={pokeLogo} alt={'배경이미지'} />
    </Link>
  );
};

export default HeaderLogo;
