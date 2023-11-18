import { useState } from 'react'
import { Title } from '../titles/title/Title'
import { Subtitle } from '../titles/subtitle/Subtitle'
import { useNavigate } from 'react-router'
import { TypesRoutes } from "../../routes/TypesRoutes.js"
import { validatorEmail } from '../../utils/validation.js'
import "./loginForm.css"
import { useAuth } from '../../context/authContext/AuthContext.jsx'

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
      try {
        const response = await authContext.login(userPending.username, userPending.password)
        navegate(TypesRoutes.HOME)
      } catch (error) {
        console.log(error.message)
      }
    } else {
      console.log("ALgo falta")
    }
  }
  const handleChangeText = (e) => {
    let posibleEmail = e.target.value
    if (validatorEmail.test(posibleEmail)) {
      setUserPending({
        ...userPending, username: e.target.value
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
