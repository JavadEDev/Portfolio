import './globals.css'
import Head from 'next/head';
import { Roboto } from 'next/font/google'
import Providers from './providers'
import { NextSeo } from 'next-seo';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: `Javad Esmati Portfolio Exploration`,
  description: 'Javad Esmati, Frontend, Developer, Nextjs, Reactjs, TailwindCSS, Animation, Framer motion, Threejs, JavaSCript, HTML5, CSS3',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Head>
          <NextSeo
            title="Javad Esmati Portfolio Exploration"
            description="This is Javad Esmati portfolio website"
            canonical="https://Javadesmati.name"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Javad Esmati Portfolio",
              "description": "Javad Esmati as a frontend developer",
              "url": "https://Javadesmati.name"
            }
          `,
            }}
          />
          <title>Javad&rsquo;s Portfolio</title>
          <meta name="description" content="This is Javad Esmati portfolio website" />
          <meta name="keywords" content="Javad, Esmati, Frontend, backend, Developer, Programer, JavaSCript, HTML5, CSS3, Nextjs, Reactjs, MangoDB" />
          <link rel="canonical" href="https://Javadesmati.name" />
          <meta name="robots" content="index, follow" />
        </Head>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
