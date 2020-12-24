import React from "react";
import './style/SongRow.css';

function SongRow(){
    return(
        <div className="songRow">
            <img src="https://pbs.twimg.com/media/D7rShzMVUAANnZ_.jpg" className="songRow__album" />
            <div class="songRow__info">
                <h1>Unsainted</h1>
                <p>Slipknot</p>
            </div>
                  
        </div>
       
    )
}

export default SongRow;