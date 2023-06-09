import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Header, Section } from '@/components';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanja Schmidt</title>
        <meta name="description" content="Tanja's Intro Site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?=v2" />
      </Head>
      <main>
        <Header />
      </main>

    </>
  )
}
