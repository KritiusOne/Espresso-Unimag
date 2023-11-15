import { useState } from "react"
import { SingInContext } from "./SingInContext"

export function SingInContextProvider({ children }) {
  const [userRegistro, setUserRegistro] = useState(
    {
      email: "",
      nombre: "",
      password: ""
    }
  )
  return (
    <SingInContext.Provider
      value={{ userRegistro, setUserRegistro }}
    >
      {children}
    </SingInContext.Provider>
  )
}
