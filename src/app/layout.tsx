import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Underconstruction from './underconstruction';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar/navbar';
import Container from '@/components/ui/container';
import { profileSetting } from '@/config/profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: profileSetting.metaTitle,
  description: profileSetting.metaDescription,
  openGraph: {
    images: [profileSetting.metaGraphImage],
  },
};

const isUnderConstruction = false;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {isUnderConstruction ? (
            <Underconstruction />
          ) : (
            <>
              <Container>
                <Navbar /> {children}
              </Container>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
