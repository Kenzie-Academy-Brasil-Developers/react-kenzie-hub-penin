import { createContext, useContext, useState } from "react"
import { api } from "../services/api"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { UserContext } from "./UserContext"

export const TechContext = createContext({})

export const TechProvider = ({ children }) => {

   const [user, setUser] = useState([])
   const { techList, setTechList } = useContext(UserContext)

   const loadUser = async () => {
      const token = localStorage.getItem("@TOKEN")
      if (token) {
         try {
            const { data } = await api.get("/profile", {
               headers: {
                  Authorization: `Bearer ${token}`,
               },
            })
            setUser(data)
            setTechList(data.techs)
         } catch (error) {
            console.log(error)
            localStorage.removeItem("@TOKEN")
         }
      }
   }

   const techCreate = async (formData) => {
      try {
         const newTech = { ...formData }
         const token = localStorage.getItem("@TOKEN")
         const { data } = await api.post("/users/techs", newTech, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         loadUser(data)
         toast.success("Tecnologia criada com sucesso!")
      } catch (error) {
         console.log(error)
         toast.error("Tecnologia já cadastrada!")
      }
   }

   const [editingTech, setEditingTech] = useState(null)
   const techUpdate = async (formData) => {
      try {
         const token = localStorage.getItem("@TOKEN")

         const { data } = await api.put(`/users/techs/${editingTech.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         const editTechList = user.techs.map((tech) => {
            if (tech.id === editingTech.id) {
               return data
            } else {
               return tech
            }
         })
         loadUser(editTechList)
         toast.success("Lista de tecnologias atualizada com sucesso!")
         setEditingTech(null)
      } catch (error) {
         console.log(error)
      }
   }

   const techDelete = async (deletingId) => {
      try {
         const token = localStorage.getItem("@TOKEN")

         await api.delete(`/users/techs/${deletingId}`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })
         const newTechList = techList.filter((tech) => tech.id !== deletingId)
         loadUser(newTechList)
         toast.success("Tecnologia excluída com sucesso!")
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <TechContext.Provider
         value={{
            user,
            setUser,
            techCreate,
            techUpdate,
            techDelete,
            loadUser,
            editingTech,
            setEditingTech,
         }}
      >
         {children}
      </TechContext.Provider>
   )
}
