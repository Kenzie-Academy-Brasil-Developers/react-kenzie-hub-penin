import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/api"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [techList, setTechList] = useState([])

  const userRegister = async (formData) => {
    try {
      setLoading(true)
      const { data } = await api.post('/users', formData)
      navigate("/")
      toast.success("Conta criada com sucesso!")
    } catch (error) {
      toast.error("Ops! Algo deu errado")

    } finally {
      setLoading(false)
    }
  }

  const userLogin = async (formData) => {
    try {
      setLoading(true)
      const { data } = await api.post("/sessions", formData)
      localStorage.setItem("@TOKEN", data.token)
      navigate("/dashboard")
      toast.success(`Bem vindo, ${data.user.name}!`)
    } catch (error) {
      toast.error("Email ou senha incorretos. Tente novamente!")
    } finally {
      setLoading(false)
    }
  }

  const userLogout = () => {
    localStorage.removeItem("@TOKEN")
    navigate("/")
  }

  return (
    <UserContext.Provider value={{techList, setTechList, userRegister, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  )
}