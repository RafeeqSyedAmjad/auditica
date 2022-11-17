import Head from 'next/head'
import Dashboard from '../components/Dashboard';

function Home() {
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