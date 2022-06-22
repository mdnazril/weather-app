import Head from 'next/head'
import Weather from '../components/navbar'

export default function Home() {
  return (
   <>
   <Head>
      <title> weather </title>
      <meta name="description" content="a simple website to past/current/future weather." />
      <meta property="og:title" content="weather website" />
      <meta property="og:description" content="a simple website to past/current/future weather." />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Weather />

   </>
  )
}
