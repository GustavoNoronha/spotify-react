
import PlayCircleFilled from "@material-ui/icons/PlayCircleFilled";
import MoreHoriz from "@material-ui/icons/MoreHoriz";
import Favorite from "@material-ui/icons/Favorite";
import React from "react";
import Header from "./Header";
import SongRow from "./SongRow";
import './style/Body.css';

function Body(){
    return(
        <div className="body">
            <Header />

            <div className="body__info">
              
              <div className="body__infoText">
                <strong>PLAYLISTS</strong>
                <h2>Melhores do Brasil</h2>
                <p>As melhores músicas do Brasil</p>
              </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled 
                        className="body__shuffle"
                    />
                    <Favorite />
                    <MoreHoriz />
                </div>
                <SongRow />

            </div>
        </div>
    )
}

export default Body;