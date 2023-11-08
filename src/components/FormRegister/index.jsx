import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import { Select } from "../Select"
import styles from "./style.module.scss"
import { formRegisterSchema } from "../formRegisterSchema"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

export const FormRegister = () => {
    const [isHidden, setIsHidden] = useState(true)
    const [passwordIsHidden, setPasswordIsHidden] = useState(true)

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formRegisterSchema),
    })

    const { userRegister } = useContext(UserContext)

    const submit = (formData) => {
        userRegister(formData)
    }

    return (
        <section className={styles.container}>
            <h2 className="title1 alignCenter">Crie sua conta</h2>
            <span className="text1 alignCenter">Rapido e grátis, vamos nessa</span>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <Input
                    type="text"
                    id="name"
                    placeholder="Digite aqui seu nome"
                    label="Nome"
                    {...register("name")}
                    error={errors.name}
                />
                <Input
                    type="email"
                    id="email"
                    placeholder="Digite aqui seu email"
                    label="Email"
                    {...register("email")}
                    error={errors.email}
                />
                <Input type={isHidden ? "password" : "text"}
                    id="password"
                    placeholder="Digite aqui sua senha"
                    label="Senha"
                    {...register("password")}
                    error={errors.password}>
                    <button className={styles.button} onClick={() => setIsHidden(!isHidden)}>
                        {isHidden ? <MdVisibilityOff size={30} /> : <MdVisibility size={30} />}
                    </button>
                </Input>
                <Input
                    type={passwordIsHidden ? "password" : "text"}
                    id="confirmPassword"
                    placeholder="Digite novamente sua senha"
                    label="Confirmar Senha"
                    {...register("confirmPassword")}
                    error={errors.confirmPassword}>
                    <button className={styles.button} onClick={() => setPasswordIsHidden(!passwordIsHidden)}>
                        {passwordIsHidden ? <MdVisibilityOff size={30} /> : <MdVisibility size={30} />}
                    </button>
                </Input>
                <Input
                    type="text"
                    id="bio"
                    placeholder="Fale sobre você"
                    label="Bio"
                    {...register("bio")}
                    error={errors.bio}
                />
                <Input
                    type="text"
                    id="contact"
                    placeholder="Opção de contato"
                    label="Contato"
                    {...register("contact")}
                    error={errors.contact}
                />
                <Select
                    label="Selecionar módulo"
                    id="course_module"
                    {...register("course_module")}
                    error={errors.course_module}>
                    <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo Módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro Módulo (Introdução ao Backend) ">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto Módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </Select>
                <button className="btnNegative" type="submit">Cadastrar</button>
            </form>
        </section>
    )
}