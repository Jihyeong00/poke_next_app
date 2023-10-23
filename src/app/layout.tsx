import type {Metadata} from 'next'
import './globals.css'
import pokeBackImage from '@/assets/png/PokéBackImage.png'
import pokeLogo from '@/assets/png/PokéLogo.png'
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'Pokémon Randome Game',
    description: 'Pokémon document with Pokémon Random Game',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
        <body>
        <Image
            className={'fixed top-top-top-10% opacity-30 h-screen w-full z-10'}
            src={pokeBackImage}
            alt={'배경이미지'}/>
        <header className={'h-16 bg-bg-lightRed z-20 relative flex p-2 gap-5 items-center'}>
            <Link className={'Logo'} href={'/'}>
                <Image
                    className={'h-12 w-40'}
                    src={pokeLogo}
                    alt={'배경이미지'}/>
            </Link>
            <nav className={'text-black'}>
                <Link className={'header-nav-btn'} href={'/board'}>자유게시판</Link>
                <Link className={'header-nav-btn'} href={'/document'}>도감</Link>
                <Link className={'header-nav-btn'} href={'/game'}>게임</Link>
            </nav>
        </header>
        {children}
        </body>
        </html>
    )
}
