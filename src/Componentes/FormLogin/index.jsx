import { useForm } from "react-hook-form";
import { Input } from "../input";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema } from "./LoginForm.schema";
import { api } from "../../services/api";
import { useState } from "react";
import style from "./styles.module.scss";



export const FormLogin = ({ setUser }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema),
    });


    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const userLogin = async (payLogin) => {
     
        try {
            setLoading(true);
            const { data } = await api.post("sessions", payLogin);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
         
            navigate("/Dashboard");
            
        } catch (error) {
          
            if (error.response?.data.message === "Incorrect email / password combination")
                alert("Email ou senha incorreta ")

        } finally {
            setLoading(false);
        };
    };
    const submit = (payLogin) => {

        userLogin(payLogin);
    };

    return (
        <form className={style.formLogin} onSubmit={handleSubmit(submit)}>
            <h2 className="title1">Login</h2>
            <Input
                label="Email"
                type="text"
                id="1"
                placeholder="informe seu email"
                error={errors.email}
                {...register("email")}
            />

            <Input
                label="Senha"
                type="password"
                id="2"
                placeholder="informe sua senha"
                error={errors.password}
                {...register("password")}
            />

             <p className="Headline">Ainda não possui uma conta?</p>
            <div className={style.divBt}>
                <button className="buttonEnt"type="submit" disabled={loading}>Entrar</button>
                <Link className="linkCad" to="/Register">Cadastre-se</Link>
            </div>
        </form>
    );
};