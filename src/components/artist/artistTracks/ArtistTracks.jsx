import React, {useEffect} from 'react';
import {Api} from "../../../api/api";

const ArtistTracks = ({id}) => {
    const getArtistTracks = () => {
        Api.getAlbumTracks(id).then(d => {
            console.log(d)
        })
    };

    useEffect(() => {
        console.log(getArtistTracks)
    }, [])

    return (
        <div>
            {id}
        </div>
    );
};

export default ArtistTracks;
