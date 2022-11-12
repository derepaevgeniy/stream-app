import React from 'react';
import { TwitchChat as TwitchChatLib } from 'react-twitch-embed';
import css from './Style.module.scss';


interface TwitchChatProps {
    channel: string
}

const TwitchChat:React.FC<TwitchChatProps> = ({
    channel
                                              }) => {
    return (
        <div className={css.twitchChatWrapper}>
            <TwitchChatLib
                channel={channel}
                darkMode
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default TwitchChat;