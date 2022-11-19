import Head from 'next/head'
import {useSession} from 'next-auth/react'
import { useRouter } from 'next/router';
import Dashboard from '../components/Dashboard';
import Loader from '../components/Loader';

function Home() {

  const router = useRouter(); 
  const {status , data: session} = useSession({
    onUnauthenticated(){
      router.push("/auth/signin")
    }
  });

  if(status==='loading'){
    return <Loader/>;
  }


  return (
    <div>
      <Head>
        <title>Auditica - Dashboard</title>
        <link rel ="icon" href="/favicon.ico"/>
      </Head>

      <Dashboard />
    </div>


  )
}

export default Home;