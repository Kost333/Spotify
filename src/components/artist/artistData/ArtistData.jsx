import React, {useEffect, useState} from "react";
import style from "./ArtistData.module.css";
import {Api} from "../../../api/api";
import {useParams} from "react-router-dom";
import AlbumCard from "../../album/albumCard/AlbumCard";

const ArtistData = (props) => {
    const {artistId} = useParams();
    const [albumsData, setAlbumsData] = useState([]);

    useEffect(() => {
        if (artistId) {
            Api.getArtistsAlbums(artistId).then(({data: albumsData}) => {
                setAlbumsData(albumsData.items);
                props.setAlbumName(albumsData.items)
            });
        }
    }, []);

    return (
        <div className={style.content}>
            <h2 style={{fontSize: "30px", padding: "20px"}}>
                Albums
            </h2>
            <div className={style.content}>
                {albumsData.map((album) => (
                    <div
                        key={album.id}
                        className={style.trackItemBlock}
                    >
                        <AlbumCard albumData={album}/>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
};

export default ArtistData;
