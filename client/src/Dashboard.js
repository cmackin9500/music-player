import { useState, useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { BsFillPauseBtnFill } from "react-icons/bs"
import PlayBar from "./components/PlayBar";

const spotifyApi = new SpotifyWebApi();

const Dashboard = ({accessToken}) => {
    const [spotifyToken, setSpotifyToken] = useState("");
    const [nowPlaying, setNowPlaying] = useState({}); 
    const [loggedIn, setLoggedIn] = useState(false);
    const [isPlaying, setIsPlaying] = useState(true);

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
                albumArt: data.item.album.images[0].url,
                duration: data.item.duration_ms,
            });

          }, (err) => {
            console.log('Something went wrong!', err);
          }
        );
    }

    // checks if the user's music is currently playing or paused
    const checkIsPlaying = () => {
      spotifyApi.getMyCurrentPlaybackState()
        .then((data) => {
            setIsPlaying(data.context.is_playing);
          }, (err) => {
            console.log('Something went wrong!', err);
          }
        );
    }
    
    const pauseNowPlaying = () => {
        spotifyApi.pause()
        .then(function() {
          console.log('Playback paused');
        }, function(err) {
          //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
          console.log('Something went wrong!', err);
        });
    }

    const resumePauseNowPlaying = () => {
        spotifyApi.play()
        .then(function() {
          console.log('Playback started');
        }, function(err) {
          pauseNowPlaying();
        });
    }

    return (
        <div className="Dashboard"> 
            {!loggedIn && <a href="http://localhost:3001"> 'Error when logging in!' </a>}
            {loggedIn && (
                <>
                    <div> Now Playing: {nowPlaying.name} </div>
                    <div>
                        <img className="albumArt" src={nowPlaying.albumArt} style={{height:150}}/>
                        <br></br>
                        <div className="buttons">
                          <button onClick={() => getNowPlaying()}> Current Playing </button>
                          <br></br><br></br>
                          <PlayBar isPlaying={isPlaying} setIsPlaying={setIsPlaying} resumePauseNowPlaying={resumePauseNowPlaying} checkIsPlaying={checkIsPlaying}/>
                        </div>
                        <br></br>
                        <div> Duration: {nowPlaying.duration}</div>
                    </div>
                </>
            )}
        </div>
    )
};

export default Dashboard; 