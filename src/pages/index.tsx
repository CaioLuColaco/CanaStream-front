
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '../components/header'
import Navbar from '../components/Navbar'
import Header from "@/components/header";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>CanaStream</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Navbar/>
        <Footer />
      </main>
    </>
  );
}
