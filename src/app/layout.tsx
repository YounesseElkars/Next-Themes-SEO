import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Theme from '@/themes/defaultTheme';
import { profileSetting } from '@/config/profile';
import { ThemeProvider } from '@/themes/Theme-provider';

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
            <Theme.Underconstruction />
          ) : (
            <>
              <Theme.Container>
                <Theme.Navbar />
                {children}
                <Theme.Footer />
              </Theme.Container>
            </>
          )}
        </ThemeProvider>
      </body>
    </html>
  );
}
