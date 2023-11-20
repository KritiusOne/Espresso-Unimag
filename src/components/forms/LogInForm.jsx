import { useState } from 'react'
import { Title } from '../titles/title/Title'
import { Subtitle } from '../titles/subtitle/Subtitle'
import { useNavigate } from 'react-router'
import { TypesRoutes } from "../../routes/TypesRoutes.js"
import { validatorEmail } from '../../utils/validation.js'
import "./loginForm.css"
import { useAuth } from '../../context/authContext/AuthContext.jsx'
import { getUser } from '../../services/getUser.js'

export function LogInForm() {
  const authContext = useAuth()
  const navegate = useNavigate()
  const [userPending, setUserPending] = useState({
    username: "",
    password: ""
  })
  console.log(authContext)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (userPending.username != "" && userPending.password != "") {
      const responseBBDD = await getUser(authContext.rol)
      if (!responseBBDD.ok) {
        throw new Error("La peticion esta saliendo mal")
      }
      const responseTransform = await responseBBDD.json()
      const [userInCase] = responseTransform.filter((user) => user.correo == userPending.username)
      if (userInCase != undefined) {
        try {
          const response = await authContext.login(userPending.username, userPending.password)
          navegate(TypesRoutes.HOME)
        } catch (error) {
          console.log(error.message)
        }
      } else {
        throw new Error("Se esta accediendo a un usuario al que no le corresponden los roles asignados")
      }
    } else {
      console.log("ALgo falta")
    }
  }
  const handleChangeText = (e) => {
    let posibleEmail = e.target.value.trim().toLowerCase()
    if (validatorEmail.test(posibleEmail)) {
      setUserPending({
        ...userPending, username: posibleEmail
      })
    }
  }
  const handleChangePassword = (e) => {
    setUserPending({
      ...userPending, password: e.target.value
    })
  }
  return (
    <form className="form">
      <section className='form--containerPrime'>
        <Title className="form__title">
          Bienvenido de vuelta
        </Title>
        <Subtitle className="form__subtitle">
          Iniciar sesión para continuar
        </Subtitle>
        <div className="form--container">
          <h3 className="form--container__subtitle">Correo Electronico</h3>
          <input className="form--container__input input--text" onChange={handleChangeText} type="text" />
        </div>
        <div className="form--container">
          <h3 className="form--container__subtitle">Contraseña</h3>
          <input className="form--container__input input--password" onChange={handleChangePassword} type="password" />
        </div>
        <input type="submit" placeholder="Iniciar Sesion" onClick={handleSubmit} className="form__button" />
      </section>
    </form>
  )
}
