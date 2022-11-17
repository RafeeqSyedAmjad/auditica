import Head from "next/head"
import Image from "next/image"
import auditicalogo from '../public/auditica_logo.png'


function Signin() {
    return (
        <div>
            <Head>
                <title>Login - Auditica</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Image src={auditicalogo} width={600} height={250} objectFit="contain" alt="auditica logo" className="animate-pulse" />
        </div>
    )
}

export default Signin