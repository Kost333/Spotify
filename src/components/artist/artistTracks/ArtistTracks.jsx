import React from 'react';
import {AudioPlayer, AudioPlayerControlSprite} from "react-audio-player-pro";

const ExampleAudioPlayer = ({track}) => {

    const audioTrackList = {
        TrackType: [
            {
                src: track.preview_url,

                preload: 'auto',

                duration: 100,

                mediaMetadata: {track},
            },
        ]
    };

    return (
        <>
            <AudioPlayerControlSprite/>
            <AudioPlayer
                trackList={audioTrackList}

                className="my-class-name"

                onDidMount={console.log}

                defaultState={{
                    isMuted: false,

                    activeIndex: 0,

                    isShuffleOn: false,

                    isTrackListOpen: true,

                    repeatingState: 'none',
                }}
            />
        </>
    );
}

export default ExampleAudioPlayer;