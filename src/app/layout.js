import './globals.css'
import { Roboto } from 'next/font/google'
import Providers from './providers'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: `Javad Esmati Portfolio Exploration`,
  description: 'This is Javad Esmati portfolio website',
  generator: 'Javad Esmati',
  applicationName: 'Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['Javad Esmati', 'Developer', 'Frontend','Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Javad' }, { name: 'Javad Esmati', url: 'https://javadesmati.name' }],
  creator: 'Javad Esmati',
  publisher: 'Javad',
  formatDetection: {
    email: 'Javad.esmatib@Gmail.com',
    address: 'Norway',
    telephone: false,
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
        <title>Javad&rsquo;s Portfolio</title>
        <meta name="description" content="This is Javad Esmati portfolio website" />
        <meta name="keywords" content="Javad, Esmati, Frontend, backend, Developer, Programer, JavaSCript, HTML5, CSS3, Nextjs, Reactjs, MangoDB" />
        <link rel="canonical" href="https://Javadesmati.name" />
        <meta name="robots" content="index, follow" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
