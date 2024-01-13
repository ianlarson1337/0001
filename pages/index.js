import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>I4NL4RS0N</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="I4NL4RS0N" />
       
      </main>

      <Footer />
    </div>
  )
}
