import Sidebar from "./Sidebar";
import Body from "./Body";
import Right from "./Right";
import SpotifyWebApi from "spotify-web-api-node";
import { useSession } from "next-auth/react";


const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});


function Dashboard() {
  const { data: session } = useSession();
  const { accessToken } = session;

  return (
    <main>
        <Sidebar/>
        <Body spotifyApi = {spotifyApi}/>
        <Right/>
    </main>
  )
}

export default Dashboard;