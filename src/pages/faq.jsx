import Navbar from '../components/Navbar'
import Head from 'next/head'

export default function Faq() {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
            {/* <main className={styles.main}> */}
                <Navbar/>
                <h1>Esse é o FAQ</h1>
            </main>
        </>
    )
}