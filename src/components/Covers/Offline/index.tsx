import css from './StreamOffline.module.scss';


const StreamOffline:React.FC = () => {
    return (
        <div className={css.cover}>
            <h1 className={css.title}>Stream is offline</h1>
            <div className={css.links}>
                <a className={css.link} href="https://t.me/yaopyatzalipnaeenogi" target={'_blank'}>Telegram</a>
                <a className={css.link} href="https://vk.com/yaopyatzalipnaeenogi" target={'_blank'}>Vkontakte</a>
                <a className={css.link} href="https://www.twitch.tv/ooohmygosha" target={'_blank'}>Twitch</a>
            </div>
        </div>
    );
};

export default StreamOffline;