import React, {useEffect, useState} from "react";
import style from "./AlbumData.module.css";
import {Api} from "../../../api/api";
import {useParams} from "react-router-dom";
import ArtistAudio from "../../artist/artistTracks/ArtistTracks";

const AlbumData = (props) => {
    const {albumId} = useParams();

    const [albumTracks, setAlbumTracks] = useState([]);

    useEffect(() => {
        if (albumId) {
            Api.getAlbumTracks(albumId).then(({data: albumData}) => {
                setAlbumTracks(albumData.items);
            });
        }
    }, []);

    return (
        <div className={style.trackItemBlock}>
            <div style={{display: 'flex', gap: '20px'}}>
                <div>
                    <img src={props?.AlbumData?.images?.[0]?.url} alt="Author" width="300px"
                         style={{borderRadius: "10px"}}/>
                </div>
                <div>
                    {props.albumName.length ?
                        <p style={{fontSize: "50px", padding: "20px"}}>{props.albumName[0].name}</p> : ''}
                    {props.albumName.length ?
                        <p style={{fontSize: "20px", padding: "20px"}}>{albumTracks[0]?.artists[0]?.name}</p> : ''}
                </div>
            </div>
            <div>
                <h2 style={{fontSize: "30px", padding: "20px"}}>Tracks</h2>
                <ArtistAudio albumTracks={albumTracks}/>
            </div>
        </div>
    );
};

export default AlbumData;