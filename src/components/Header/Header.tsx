import React from 'react';
import HeaderLogo from "@/components/Header/Logo";
import HeaderNav from "@/components/Header/Nav";
import HeaderButton from "@/components/Header/Button";

const Header = () => (
    <header className={'h-16 bg-bg-lightRed z-20 relative text-black'}>
        <section className={' m-auto w-1200 flex items-center justify-between'}>
            <div className={'LeftSection flex items-center p-2 gap-5'}>
                <HeaderLogo/>
                <HeaderNav/>
            </div>
            <div>
                <HeaderButton href={'/sign'} title={'로그인'}/>
            </div>
        </section>
    </header>
);

export default Header;