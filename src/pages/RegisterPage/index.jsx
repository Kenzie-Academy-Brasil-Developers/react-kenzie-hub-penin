import { Link } from "react-router-dom"
import { FormRegister } from "../../components/FormRegister"
import styles from "./style.module.scss"

export const RegisterPage = () => {
    return (
        <>
            <header className={styles.header}>
                <h1 className="logo">Kenzie Hub</h1>
                <Link to={"/"}><button className={styles.btn}>Voltar</button></Link>

            </header>
            <main className={styles.main}>
                <FormRegister  />
            </main>

        </>
    )
}