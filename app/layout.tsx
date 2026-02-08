import type { Metadata } from 'next';
import { DM_Sans, Crimson_Pro, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jay Patel | Personal Website',
  description: 'Portfolio of Jay Patel',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${dmSans.variable} ${crimsonPro.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans">
        <CustomCursor 
          glowSize={20}
          glowColor="rgba(212, 115, 94, 0.7)"
          hoverScale={1.5}
          type="glow"
        />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
