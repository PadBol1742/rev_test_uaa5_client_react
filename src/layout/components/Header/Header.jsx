import NavBar from '/src/layout/features/NavBar/NavBar'
import style from "./Header.module.css";
import sun from "/src/assets/images/sun.png";
import clsx from 'clsx';


export default function Header({page}) {

    return (
        <header id='header' className={clsx(style["header-style"], page === "home" && style["home"])}>
            <img className={style["header-img"]} src={sun} alt="summer icons" />
            <h1 className={clsx(page==="home" && style["home"])}>Voyage Voyage</h1>
            <NavBar color={page === "home" ? "green" :"blue"} />
        </header>
    );
}
