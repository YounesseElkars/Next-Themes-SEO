import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Underconstruction from './underconstruction';
import { ThemeProvider } from '@/components/Theme-provider';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/ui/Container';
import { profileSetting } from '@/config/profile';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: profileSetting.metadataBase,
  title: profileSetting.metaTitle,
  description: profileSetting.metaDescription,
  keywords: profileSetting.metaKeywords,
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
                <Navbar />
                {children}
                <Footer />
              </Container>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
