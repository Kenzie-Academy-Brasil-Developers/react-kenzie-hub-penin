import { useContext } from "react"
import { useForm } from "react-hook-form"
import { TechContext } from "../../providers/TechContext"
import styles from "./style.module.scss"
import { useOutclick } from "../../hooks/useOutclick"
import { useKeydown } from "../../hooks/useKeydown"
import { Input } from "../Input"
import { Select } from "../Select"

export const EditTechModal = () => {
    const { techUpdate, editingTech, setEditingTech } = useContext(TechContext)

    const { register, handleSubmit } = useForm({
        values: {
            title: editingTech.title,
            status: editingTech.status,
        },
    })

    const submit = (formData) => {
        techUpdate(formData)
    }

    const modalRef = useOutclick(() => {
        setIsOpen(false)
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
                            <h3>Tecnologia Detalhes</h3>
                            <button ref={buttonRef} onClick={() => setEditingTech(null)}>X</button>
                        </div>
                    </header>
                    <form className={styles.form} onSubmit={handleSubmit(submit)}>
                        <Input
                            disabled
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
                        <button className={styles.button} type="submit">Salvar Alterações</button>
                    </form>
                </div>
            </div>
        </>
    )
}
