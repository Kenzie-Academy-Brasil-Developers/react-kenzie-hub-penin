import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../Input"
import styles from "./style.module.scss"
import { Link } from "react-router-dom"
import { formLoginSchema } from "../formLoginSchema"
import { useContext, useState } from "react"
import { UserContext } from "../../providers/UserContext"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"

export const FormLogin = () => {
  const [isHidden, setIsHidden] = useState(true)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(formLoginSchema),
  })
  const { userLogin } = useContext(UserContext)

  const onSubmit = (formData) => {
    userLogin(formData)
  }

  return (
    <section className={styles.container}>
      <h2 className="title1 alignCenter">Login</h2>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          id="email"
          placeholder="Digite aqui seu email"
          label="Email"
          {...register("email")}
          error={errors.email}
        />
        <Input type={isHidden ? "password" : "text"}
          placeholder="Digite aqui sua senha"
          label="Senha"
          {...register("password")}
          error={errors.password}>
          <button className={styles.buttonPassword} onClick={(event) => event.preventDefault() || setIsHidden(!isHidden)}>
            {isHidden ? <MdVisibilityOff size={30} /> : <MdVisibility size={30} />}
          </button>
        </Input>
        <button className="btnDefault" type="submit">Entrar</button>
        <p className="headlineBold">Ainda não possui uma conta?</p>
        <Link className={styles.btn} to={"/register"}><button type="submit" className={styles.word}>Cadastre-se</button></Link >
      </form>
    </section>
  )
}
