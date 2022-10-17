import React from 'react';
import style from "./Header.module.css";
import {useNavigate} from "react-router-dom";
import logo from './../../assets/Spotify_Logo_Black.png';

const Header = (props) => {
    const navigate = useNavigate();

    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="Logo" className={style.app_logo}/>
            </div>

            <div className={style.home} onClick={() => navigate('/')}>
                <span className="glyphicon glyphicon-home" style={{fontSize: "15px"}}></span>
            </div>

            <div className={style.searchInput}>
                <input type="search" className={style.search} placeholder="What do you want to listen to?"
                       value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)}/>
                <i className="fa fa-times" style={{fontSize: "22px", position: "absolute", right: "3%", top: "23%"}}
                   onClick={() => {
                       props.setSearchValue('')
                       navigate('/')
                   }}></i>
            </div>
        </header>
    )
}

export default Header;
