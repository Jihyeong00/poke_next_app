import type {Metadata} from 'next'
import './globals.css'
import pokeBackImage from '@/assets/png/PokéBackImage.png'
import pokeLogo from '@/assets/png/PokéLogo.png'
import Image from "next/image";
import Link from "next/link";
import SignButton from "@/components/Header/SignButton";

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
        <header className={'h-16 bg-bg-lightRed z-20 relative text-black'}>
            <section className={' m-auto w-1200 flex items-center justify-between'}>
                <div className={'LeftSection flex items-center p-2 gap-5'}>
                    <Link className={'Logo'} href={'/'}>
                        <Image
                            className={'h-12 w-40'}
                            src={pokeLogo}
                            alt={'배경이미지'}/>
                    </Link>
                    <nav>
                        <Link className={'header-nav-btn'} href={'/board'}>자유게시판</Link>
                        <Link className={'header-nav-btn'} href={'/document'}>도감</Link>
                        <Link className={'header-nav-btn'} href={'/game'}>게임</Link>
                    </nav>
                </div>
                <div>
                    <SignButton/>
                </div>
            </section>
        </header>
        <main className={'m-auto w-1200'}>
            {children}
        </main>
        </body>
        </html>
    )
}
