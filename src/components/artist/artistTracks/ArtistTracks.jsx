import React from 'react';
import {AudioPlayer, AudioPlayerControlSprite} from "react-audio-player-pro";

const ExampleAudioPlayer = ({albumTracks}) => {

    const audioTrackList = [];
    albumTracks.forEach(track => {
        audioTrackList.push({
                src: track.preview_url,
                preload: 'auto',
                duration: track.duration_ms,
                content: <p>{track.name}</p>,
                mediaMetadata: {
                    title: track.name,
                    artist: track?.artists[0]?.name,
                },
            }
        )
    })

    return (
        <div>
            <AudioPlayerControlSprite/>
            <AudioPlayer
                trackList={audioTrackList}
                className="audio__player"
                defaultState={{
                    isMuted: false,
                    activeIndex: 0,
                    isShuffleOn: false,
                    isTrackListOpen: true,
                    repeatingState: 'none',
                }}
            />
        </div>
    );
}

export default ExampleAudioPlayer;