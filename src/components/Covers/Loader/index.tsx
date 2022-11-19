import css from './Loader.module.scss';


interface LoaderProps {
    text?: string
}

const Loader:React.FC<LoaderProps> = ({
    text = 'Loading...'
                                      }) => {
    return (
        <div className={css.cover}>
            <h1 className={css.title}>{text}</h1>
        </div>
    );
}

export default Loader;