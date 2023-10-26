import type { Metadata } from 'next';
import './globals.css';
import BackGroundImage from '@/components/Common/BackGroundImage';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Pokémon Randome Game',
  description: 'Pokémon document with Pokémon Random Game',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackGroundImage />
        <Header />
        <main className={'relative z-20 m-auto min-h-[calc(100%-16px)] w-1200'}>
          {children}
        </main>
      </body>
    </html>
  );
}
