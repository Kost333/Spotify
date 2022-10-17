import React from 'react';
import style from "../Card.module.css";
import {useNavigate} from "react-router-dom";

const ArtistCard = ({artistData, setUser}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`artist-data/${artistData.id}`);
        setUser(artistData);
    }

    if (!artistData) {
        return null
    }

    return (
        <div onClick={handleClick} style={{cursor: "pointer", margin: "10px"}}>
            <div className={style.card}>
                <img src={artistData.images?.[0]?.url}
                     alt="Artist"/>
                <h3 className='p-10'>{artistData.name}</h3>
                <h5 className='p-10'>{artistData.genres?.[0]}</h5>
            </div>
        </div>
    );
};

export default ArtistCard;
