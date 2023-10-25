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
        <main className={'m-auto w-1200'}>{children}</main>
      </body>
    </html>
  );
}
