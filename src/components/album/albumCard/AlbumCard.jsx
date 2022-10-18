import React from "react";
import style from "../../artist/Card.module.css";
import {useNavigate} from "react-router-dom";

const AlbumCard = ({albumData}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/album-data/${albumData.id}`);
    };

    if (!albumData) {
        return null;
    }

    return (
        <div
            onClick={handleClick}
            style={{cursor: "pointer", margin: "10px"}}
        >
            <div className={style.card}>
                <img src={albumData.images?.[0]?.url} alt="Artist"/>
                <h3 className="p-10">{albumData.name}</h3>
                <h5 className="p-10">{albumData.total_tracks?.[0]}</h5>
            </div>
        </div>
    );
};

export default AlbumCard;