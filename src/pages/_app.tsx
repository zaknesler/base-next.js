import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import { fetcher } from '../utils/fetcher'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <SWRConfig value={{ fetcher }}>
      <Head>
        <title>Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  )
}

export default App
