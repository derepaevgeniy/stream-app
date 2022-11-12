import Iframe from 'react-iframe'
import css from './MatchTV.module.scss';

interface MainPlayerProps {
    url: string
}

const MainPlayer:React.FC<MainPlayerProps> = ({
    url
                                                    }) => {
    return (
        <Iframe
            url={url}
            width="100%"
            height="100%"
            display="block"
            position="relative"
            allow="autoplay"
            className={css.matchTVPlayer}
        />
    );
};

export default MainPlayer;