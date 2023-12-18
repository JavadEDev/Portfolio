import './globals.css'
import Head from 'next/head';
import { Inter } from 'next/font/google'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Javad's Portfolio Exploration`,
  description: 'Javad Esmati, Frontend, Developer, Nextjs, Reactjs, TailwindCSS, Animation, Framer motion, Threejs, JavaSCript, HTML5, CSS3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Head>
          <title>Javad&rsquo;s Portfolio</title>
          <meta name="description" content="جواد عصمتی، برنامه نویس، طراح سایت، Javad Esmati, Frontend, Developer, Backend " />
          <meta name="keywords" content="Javad, Esmati, Frontend, backend, Developer, Programer, JavaSCript, HTML5, CSS3, Nextjs, Reactjs, MangoDB" />
          <link rel="canonical" href="http://www.javadesmati.name" />
          <meta name="robots" content="index, follow" />
        </Head>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
