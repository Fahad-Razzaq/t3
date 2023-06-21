import Navbar from '@/components/Navbar';
import { Toaster } from '@/components/ui/Toaster';
import { siteConfig } from '@/config/siteConfig';
import '@/styles/globals.css';
import { ClientProvider } from '@/utils/trpc-provider';
import { cn } from '@/utils/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.social.github,
    },
  ],
  creator: siteConfig.creator,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.siteUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.siteUrl}/cover-pic.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.creator,
  },
  icons: siteConfig.icons,

  manifest: siteConfig.manifest,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('mx-auto max-w-[1920px]', poppins.className)}>
      <body className="mx-auto min-h-screen bg-slate-50 pt-12 antialiased">
        <Navbar />
        <ClientProvider session={undefined}>{children}</ClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
