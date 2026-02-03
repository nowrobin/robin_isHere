import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import './i18n';
import I18nProvider from '@/components/i18n/i18nProvider';
import ClarityInit from '@/components/analytics/clarity';
import { cookies, headers } from 'next/headers';
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Jungwook Han | Frontend Developer',
  description:
    '한정욱의 포트폴리오 - 사용자 경험을 중시하는 프론트엔드 개발자, React, Next.js, TypeScript 전문',
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/favicon/apple-touch-icon.png',
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const localeCookie = cookieStore.get('locale')?.value;
  const acceptLanguage = headerStore.get('accept-language')?.toLowerCase() ?? '';
  const initialLocale =
    localeCookie === 'en' || localeCookie === 'ko'
      ? localeCookie
      : acceptLanguage.startsWith('ko') || acceptLanguage.includes('ko')
        ? 'ko'
        : 'en';

  return (
    <html lang={initialLocale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased no-scrollbar`}
      >
        <I18nProvider initialLocale={initialLocale}>{children}</I18nProvider>
        <ClarityInit />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_ANALYTICS ?? ''} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
