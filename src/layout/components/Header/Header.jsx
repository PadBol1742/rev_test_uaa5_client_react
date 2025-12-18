import NavBar from '/src/layout/features/NavBar/NavBar'
import style from "./Header.module.css";
import sun from "/src/assets/images/sun.png";

export default function Header() {

    return (
        <header className={style["header-style"]}>
            <img className={style["header-img"]} src={sun} alt="summer icons" />
            <h1>Voyage Voyage</h1>
            <NavBar />
        </header>
    );
}
