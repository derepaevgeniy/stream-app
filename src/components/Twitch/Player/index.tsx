import React, { useRef } from 'react';
import { TwitchPlayer as TwitchPlayerLib } from 'react-twitch-embed';
import css from './Style.module.scss';
import {Dispatch, SetStateAction} from "react";


interface TwitchPlayerProps {
    statusHandler: Dispatch<SetStateAction<boolean | undefined>>,
    readyHandler: Dispatch<SetStateAction<boolean>>
    channel: string
}

const TwitchPlayer:React.FC<TwitchPlayerProps> = ({
    statusHandler,
    readyHandler,
    channel
                                                  }) => {
    const embed = useRef();

    const handleReady = (e: any) => {
        readyHandler(true);
        embed.current = e;
    };

    return (
        <div className={css.twitchPlayerWrapper}>
            <TwitchPlayerLib
                muted={false}
                channel={channel}
                autoplay
                onReady={handleReady}
                width="100%"
                height="100%"
                onOffline={() => {
                    statusHandler(false);
                    console.log('offline');
                }}
                onOnline={() => {
                    statusHandler(true);
                    console.log('online');
                }}
            />
        </div>
    );
}
export default TwitchPlayer;