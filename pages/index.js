import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wear It | One stop solution for your clothing</title>
        <meta name="description" content="Wear It - one stop solution for your clothing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='p-4 m-4 font-semibold'>Hello</div>
    </div>
  )
}
