import Sidebar from "./Sidebar";
import Body from "./Body";
import Right from "./Right";
import SpotifyWebApi from "spotify-web-api-node";
function Dashboard() {

  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
  });

  return (
    <main>
        <Sidebar/>
        <Body spotifyApi = {spotifyApi}/>
        <Right/>
    </main>
  )
}

export default Dashboard;