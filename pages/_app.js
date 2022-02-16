
import Head from 'next/head'
import '../styles/globals.css' 

function MyApp({ Component, pageProps }) {  
  return (
    <>
      <Head>
      <link rel='icon' href='/favicon.png' />
        <meta name="theme-color" content="#2CBC63"/>
        <link rel='manifest' href='/manifest.json' />
      </Head>

      <Component {...pageProps} />

    </>)



}

export default MyApp
