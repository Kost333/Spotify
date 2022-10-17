import React from 'react';
import style from "./Profile.module.css";
import ArtistCard from "../artist/artistCard/ArtistCard";

const Profile = (props) => {

    return (
        <div className={style.content}>
            {props.artistsData.map(artist => {
                if (props.searchValue && !!props.artistsData) {
                    return (
                        <div key={artist.id}>
                            <ArtistCard artistData={artist} setUser={props.setUser}/>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Profile;