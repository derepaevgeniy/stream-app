import React, {useEffect, useState} from 'react';
import TwitchPlayer from "./components/Twitch/Player";
import TwitchChat from "./components/Twitch/Chat";
import MainPlayer from "./components/Players/MainPlayer";
import css from 'src/styles/App.module.scss';
import StreamOffline from "./components/Covers/Offline";
import {fetchConfig} from "./config";
import {Config} from "./config";
import Loader from "./components/Covers/Loader";
import MenuIcon from "./components/MenuIcon";


function App() {

    const [twitchReady, setTwitchReady] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean | undefined>(undefined);
    const [config, setConfig] = useState<Config>({
        mainVideoUrl: '',
        twitchChannel: ''
    });
    const [renderAvailable, setRenderAvailable] = useState<boolean>(false);
    const [menuActive, setMenuActive] = useState<boolean>(false);

    useEffect(() => {
        fetchConfig().then((data) => {
            setConfig(data);
            setRenderAvailable(true);
        });
    }, [])

    const menuButtonClick = () => {
        setMenuActive(!menuActive);
    }

    return renderAvailable ? (
        <div className={css.layout}>
            {!twitchReady && <Loader/>}
            {twitchReady && status === undefined && <Loader text={'Connection...'}/>}
            {twitchReady && status === false && <StreamOffline/>}
            <div className={css.layout__inner}>
                <div className={css.layout__mainSide}>
                    <MainPlayer url={config.mainVideoUrl}/>
                </div>
                <div className={`${css.layout__rightSide} ${menuActive ? css.menuOpened : ''}`}>
                    <TwitchPlayer statusHandler={setStatus} channel={config.twitchChannel} readyHandler={setTwitchReady}/>
                    <TwitchChat channel={config.twitchChannel}/>
                </div>
            </div>
            <div className={css.button} onClick={menuButtonClick}>
                <MenuIcon active={menuActive}/>
            </div>
        </div>
    ) : null;
}

export default App;
