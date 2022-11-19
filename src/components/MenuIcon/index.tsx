import css from './MenuIcon.module.scss';


interface MenuIconProps {
    active: boolean
}

const MenuIcon:React.FC<MenuIconProps> = ({
    active
                                          }) => {
    return (
        <div className={`${css.container} ${active ? css.active : ''}`}>
            <div className={css.container__item}></div>
            <div className={css.container__item}></div>
            <div className={css.container__item}></div>
        </div>
    );
};

export default MenuIcon;