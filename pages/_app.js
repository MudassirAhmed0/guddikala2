
import Head from 'next/head'
import '../styles/globals.css'
import Script from 'next/script'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  // useEffect(()=>{
  //   let script = document.createElement('script')
  //   script.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js')
  //   document.querySelector("body").appendChild(script)
  // },[])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/fontawesome.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/regular.min.css" />
      </Head>

      <Component {...pageProps} />

    </>)



}

export default MyApp
