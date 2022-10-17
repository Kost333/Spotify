import React from 'react';
import style from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const navigation = [
    {
        path: '/',
        iconName: 'home',
        name: 'Home'
    },
    {
        path: 'search',
        iconName: 'search',
        name: 'Search'
    },
    {
        path: 'artist-card',
        iconName: 'book',
        name: 'Library'
    },
];

const Navbar = () => {
    const activeStyle = {
        color: "#fff"
    };

    return (
        <nav className={style.nav}>
            <ul>
                {navigation.map((navItem) => (
                    <li key={navItem.path} className={style.navListItem}>
                        <NavLink to={navItem.path} className={style.navItemBlock} style={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            <i className={`fa fa-${navItem.iconName} mr-5`} aria-hidden="true"></i>
                            <p>{navItem.name}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar;
