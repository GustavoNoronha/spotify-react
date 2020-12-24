import Search from "@material-ui/icons/Search";
import React from "react";
import './style/Header.css';

function Header(){
    return(
        <div className="header">

            <div className="header__left">
                <Search />
                <input type="text" placeholder="Busque por artistas sons ou podcasts"/>
            </div>

            <div className="header__right">
                <h4>Gustavo Noronha</h4>
            </div>
        
        </div>
    )
}

export default Header;