// RootLayout.tsx

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import StarsCanvas from '@/components/main/StarBackground';
import Navbar from '@/components/main/Navbar';
import Footer from '@/components/main/Footer';
import Hero from '@/components/main/Hero';
import Encryption from '@/components/main/Encryption';
import Skills from '@/components/main/Skills';
import Projects from '@/components/main/Projects';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: `Asim Altaf's Portfolio`,
  description: 'Portfolio of Asim Altaf',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden h-full w-full`}>
        <div id="app">
          {children}
          <Projects />
          {/* Other components can be added here */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
