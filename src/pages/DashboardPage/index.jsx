import { useContext, useEffect, useState } from "react"
import styles from "./style.module.scss"
import { UserContext } from "../../providers/UserContext"
import { TechList } from "../../components/TechList"
import { CreateTechModal } from "../../components/CreateTechModal"
import { TechContext } from "../../providers/TechContext"
import { EditTechModal } from "../../components/EditTechModal"


export const DashboardPage = () => {
    const { userLogout } = useContext(UserContext)
    const { user, loadUser, editingTech } = useContext(TechContext)

    useEffect(() => {
        loadUser()
    }, [])

    const [isOpen, setIsOpen] = useState(null)

    return (
        <>
            <header>
                <div className={styles.header}>
                    <h1 className="logo">Kenzie Hub</h1>
                    <button onClick={() => userLogout()} className={styles.btn}>Sair</button>
                </div>
            </header>
            <main>
                <hr className={styles.separator} />
                {user ? (
                    <div className={styles.info}>
                        <h2 className="title1 nowrap">Olá, {user.name}!</h2>
                        <span className="text1 ">{user.course_module}</span>
                    </div>
                ) : (
                    <div className={styles.info}>
                        <h2 className="title1 nowrap">Olá, Samuel Leão</h2>
                        <span className="text1 ">Primeiro módulo (Introdução ao Frontend)</span>
                    </div>
                )}
                <hr className={styles.separator} />
                <div className={styles.info2}>
                    <h3 className="title2">Tecnologias</h3>
                    <button className={styles.buttonPlus} onClick={() => setIsOpen(true)}>+</button>
                </div>
                {user.techs && <TechList />}

                {isOpen ?
                    <CreateTechModal setIsOpen={setIsOpen} />
                    : null}
                {editingTech ?
                    <EditTechModal />
                    : null}
            </main>
        </>

    )
}