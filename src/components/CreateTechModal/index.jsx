import styles from "./style.module.scss"
import { Select } from "../Select"
import { Input } from "../Input"
import { useForm } from "react-hook-form"
import { useOutclick } from "../../hooks/useOutclick"
import { useKeydown } from "../../hooks/useKeydown"
import { useContext } from "react"
import { TechContext } from "../../providers/TechContext"

export const CreateTechModal = ({ setIsOpen }) => {
    const { register, handleSubmit } = useForm()

    const { techCreate } = useContext(TechContext)

    const submit = (formData) => {
        techCreate(formData)
    }

    const modalRef = useOutclick(() => {
        setIsOpen(null)
    })

    const buttonRef = useKeydown("Escape", (element) => {
        element.click()
    })

    return (
        <>
            <div className={styles.modalOverlay} role="dialog">
                <div ref={modalRef} className={styles.modalBox}>
                    <header className={styles.header}>
                        <div className={styles.modalHeader}>
                            <h3>Cadastrar Tecnologia</h3>
                            <button ref={buttonRef} onClick={() => setIsOpen(null)}>X</button>
                        </div>
                    </header>
                    <form className={styles.form} onSubmit={handleSubmit(submit)}>
                        <Input
                            type="text"
                            id="tech"
                            placeholder="Cadastre sua tecnologia"
                            label="Nome"
                            {...register("title")}
                        />
                        <Select
                            label="Selecionar status"
                            id="course_status"
                            {...register("status")}
                        >
                            <option value="Iniciante">Iniciante</option>
                            <option value="Intermediário">Intermediário</option>
                            <option value="Avançado">Avançado</option>
                        </Select>
                        <button className={styles.button} type="submit">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </>
    )
}