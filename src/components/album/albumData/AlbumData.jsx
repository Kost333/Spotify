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
        <div>
            <div>
                <img src={props?.AlbumData?.images?.[0]?.url} alt="Author" width="300px" style={{borderRadius: "10px"}}/>
            </div>

            {albumId && (
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col" style={{fontSize: "36px"}}>
                            Tracks
                        </th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        {albumTracks.map((track) => (
                            <div key={track.id} className={style.trackItemBlock}>
                                <ArtistAudio track={track}/>
                                <h5>{track.name}</h5>
                            </div>
                        ))}
                    </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AlbumData;
