import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";

const spotifyApi = new SpotifyWebApi();

const Dashboard = ({accessToken}) => {
    const [spotifyToken, setSpotifyToken] = useState("");
    const [nowPlaying, setNowPlaying] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        setSpotifyToken(accessToken);
        setLoggedIn(true);

    }, [accessToken])

    if(spotifyToken) spotifyApi.setAccessToken(spotifyToken); 

    const getNowPlaying = () => {
        spotifyApi.getMyCurrentPlaybackState()
        .then((data) => {
            if (data.body && data.body.is_playing) {
              console.log("User is currently playing something!");
            } else {
              console.log("User is not playing anything, or doing so in private.");
            }
            setNowPlaying({
                name: data.item.name,
                albumArt: data.item.album.images[0].url
            });

          }, (err) => {
            console.log('Something went wrong!', err);
          }
        );
    }

    return (
        <div className="Dashboard"> 
            {!loggedIn && <a href="http://localhost:3001"> 'Error when logging in!' </a>}
            {loggedIn && (
                <>
                    <div> Now Playing: {nowPlaying.name} </div>
                    <div>
                        <img src={nowPlaying.albumArt} style={{height:150}}/>
                    </div>
                </>
            )}
            {loggedIn && (
                 <button onClick={() => getNowPlaying()}> Current Playing </button>
            )}
        </div>
    )
};

export default Dashboard; 