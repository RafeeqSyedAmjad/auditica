import Head from 'next/head'
import Dashboard from '../components/Dashboard';

function Home() {
  return (
    <div>
      <Head>
        <title>Auditica - Dashboard</title>
      </Head>

      <Dashboard />
    </div>


  )
}

export default Home;