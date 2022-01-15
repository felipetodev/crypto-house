import Head from 'next/head'
import 'styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Header } from 'components/Header'
import { Footer } from 'components/Footer'
// import Script from 'next/script'

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>House of Crypto</title>
        <meta name='description' content='@felipetodev crypto house' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* <Script src='https://assets.flex.twilio.com/releases/flex-webchat-ui/2.9.1/twilio-flex-webchat.min.js' integrity='sha512-yBmOHVWuWT6HOjfgPYkFe70bboby/BTj9TGHXTlEatWnYkW5fFezXqW9ZgNtuRUqHWrzNXVsqu6cKm3Y04kHMA==' crossOrigin /> */}

      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>

      <Footer />
    </>
  )
}

export default MyApp
