import css from './Loader.module.scss';


const Loader:React.FC = () => {
    return (
        <div className={css.cover}>
            <h1 className={css.title}>Loading...</h1>
        </div>
    );
}

export default Loader;