import { useContext, useEffect } from "react"
import styles from "./style.module.scss"
import { MdOutlineEdit } from "react-icons/md"
import { RiDeleteBin6Line } from "react-icons/ri"
import { TechContext } from "../../providers/TechContext"

export const TechCard = ({ tech }) => {
    const { techDelete, setEditingTech } = useContext(TechContext)

    return (
        <>
            <li className={styles.tech}>
                <h3 className={styles.techName}>{tech.title}</h3>
                <div className={styles.techStatus}>
                    <p className={styles.status}>{tech.status}</p>
                    <button onClick={() => setEditingTech(tech)}><MdOutlineEdit className={styles.buttonEdit} /></button>
                    <button onClick={() => techDelete(tech.id)}><RiDeleteBin6Line className={styles.buttonTrash} /></button>
                </div>
            </li>
        </>
    )
}