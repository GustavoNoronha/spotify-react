import  PlayCircleOutline  from "@material-ui/icons/PlayCircleOutline";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon  from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Repeat from "@material-ui/icons/Repeat";
import React from "react";
import { Grid, Slider } from "@material-ui/core";
import { PlaylistAdd, VolumeDown } from "@material-ui/icons";
import './style/Footer.css';

function Footer({spotify}){
    return(
        <div className="footer">
            <div className="footer__left">
                <img 
                    className="footer__albmumlogo" 
                    src="https://pbs.twimg.com/media/D7rShzMVUAANnZ_.jpg"
                />
                <div className="footer__songInfo">
                    <h4>Unsainted</h4>
                    <p>Slipknot</p>
                </div>
            </div>

            <div className="footer__center">
               <ShuffleIcon className="footer__green" />
               <SkipPreviousIcon className="footer__icon" />
               <PlayCircleOutline fontSize="large" className="footer__icon" />
               <SkipNextIcon className="footer__icon" />
               <Repeat className="footer__green" />
            </div>

            <div className="footer__right">
                <PlaylistAdd className="footer__add" />
                <VolumeDown />
                <Slider className="footer__slider"/>            
            </div>
        </div>
    )
}

export default Footer;