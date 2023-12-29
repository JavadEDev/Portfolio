import './globals.css'
import { Roboto } from 'next/font/google'
import Providers from './providers'
import siteMetadata from './siteMetadata'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      siteMetadata.socialBanner
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
  referrer: 'origin-when-cross-origin',
  keywords: ['Javad Esmati', 'Developer', 'Frontend', 'Next.js', 'React', 'JavaScript'],
  formatDetection: {
    email: 'Javad.esmatib@Gmail.com',
    address: 'Norway',
    telephone: +47 - 46213064,
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['javad.esmatib@Gmail.com', 'www.javadesmati.name'],
    },
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
