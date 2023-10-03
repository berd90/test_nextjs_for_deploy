import Head from 'next/head'
import PageNotFound from "@/components/PageNotFound/PageNotFound";

export default function notFoundPage() {
    return (
        <>
            <Head>
                <title>404</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main >
                <PageNotFound />
            </main>
        </>
    )
}
