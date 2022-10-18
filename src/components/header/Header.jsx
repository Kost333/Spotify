import React from 'react';
import style from "./Header.module.css";
import {useLocation, useNavigate} from "react-router-dom";
import logo from './../../assets/Spotify_Logo_Black.png';

const Header = (props) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <header className={style.header}>
            <div>
                <img src={logo} alt="Logo" className={style.app_logo} onClick={() => navigate('/')}/>
            </div>

            <div className={style.home} onClick={() => navigate('/')}>
                <span className="glyphicon glyphicon-home" style={{fontSize: "15px"}}></span>
            </div>

            <div className={style.searchInput}>
                {
                    !location.pathname.includes('/artist-data') && !location.pathname.includes('/album-data') &&
                    !location.pathname.includes('/home') && !location.pathname.includes('/artist-card') ?
                        <>
                            <input type="search" className={style.search} placeholder="What do you want to listen to?"
                                   value={props.searchValue} onChange={(e) => props.setSearchValue(e.target.value)}/>
                            {props.searchValue && <span className={style.removeSearchInput}>
                    <i className="fa fa-times"
                       onClick={() => {
                           props.setSearchValue('')
                           navigate('/')
                       }}></i>
                </span>}
                        </> : ''
                }

            </div>
        </header>
    )
}

export default Header;