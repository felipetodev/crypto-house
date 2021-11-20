import Head from 'next/head'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>House of Crypto</title>
        <meta name="description" content="@felipetodev crypto house" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://github.com/felipetodev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by @felipetodev
        </a>
      </footer>
    </div>
  )
}

export default MyApp
