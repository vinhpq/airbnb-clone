import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/512px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
            </div>
            
        

            <div className="header__center">
                <SearchIcon />
                <input type="text" />
            </div>

            <div className="header__right">
                <h3>Become a host</h3>
                <LanguageIcon />
                <ExpandMoreIcon />
            </div>
        </div>
    )
}

export default Header
