import {BsFillPlayCircleFill, BsFillPauseCircleFill, BsFillSkipStartCircleFill, BsSkipEndCircleFill, BsFillSkipEndCircleFill} from 'react-icons/bs';
import { useState, useEffect } from "react";
 
const PlayBar = ({ isPlaying, setIsPlaying, resumePauseNowPlaying, checkIsPlaying }) => {

    const PlayPause = () => {
      setIsPlaying(!isPlaying);
      resumePauseNowPlaying();
    }

    return (
        <div className="controls">
        <BsFillSkipStartCircleFill className='btn_action'/>
        {isPlaying ? <BsFillPauseCircleFill className='btn_action pp' onClick={PlayPause}/> : <BsFillPlayCircleFill className='btn_action pp' onClick={PlayPause}/>}
        <BsFillSkipEndCircleFill className='btn_action'/>        
        </div>
    );
}

export default PlayBar;
