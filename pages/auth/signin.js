import Head from "next/head"
import Image from "next/image"
import auditicabiglogo from '../../public/auditica_signup.png'
import { getProviders, useSession , signIn} from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";

function Signin({ providers }) {
    const { data: session } = useSession();
    const router = useRouter();


    useEffect(()=> {
        if(session){
            router.push("/");
        }
    },[session]);

    if(session) return <Loader/>


    return (
        <div className="bg-[#171717] h-screen flex flex-col items-center pt-40 space-y-8">
            <Head>
                <title>Login - Auditica</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Image src={auditicabiglogo} width={480} height={480} objectFit="contain" alt="auditica logo" className="animate-pulse" />

            {Object.values(providers).map((provider)=> (
                <div key={provider.name}>
                    <button className="text-white py-4 px-6 rounded-full bg-[#ee4950] transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105 hover:bg-[#8a070e]"
                    onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    )
}

export default Signin;

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}