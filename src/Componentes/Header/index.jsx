
import Logo from "../../assets/Logo.svg";
import style from "./style.module.scss"
export const Header = ({ user, userLogout }) => {
    return (
        <header >
            <div className={style.header}>

                <div className={style.headerLogo}>
                    <img src={Logo} alt="Logo Kenzie hub" />
                    <button className="sair" onClick={() => userLogout()}>Sair</button>
                </div>
                <div className={style.headerinfo}>
                    <h1 className="title1">Olá, {user?.name}</h1>
                    <p className="Headline">{user?.course_module}</p>
                </div>

            </div>

        </header>
    );
};