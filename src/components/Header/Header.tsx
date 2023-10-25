import React from 'react';
import HeaderLogo from '@/components/Header/Logo';
import HeaderNav from '@/components/Header/Nav';
import HeaderButton from '@/components/Header/Button';

const Header = () => (
  <header className={'relative z-20 h-16 bg-bg-lightRed text-black'}>
    <section className={' m-auto flex w-1200 items-center justify-between'}>
      <div className={'LeftSection flex items-center gap-5 p-2'}>
        <HeaderLogo />
        <HeaderNav />
      </div>
      <div>
        <HeaderButton href={'/sign'} title={'로그인'} />
      </div>
    </section>
  </header>
);

export default Header;
