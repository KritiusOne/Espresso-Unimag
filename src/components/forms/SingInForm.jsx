import { Link, useNavigate } from 'react-router-dom'
import React, { useContext } from 'react'
import { Title } from '../titles/title/Title'
import { Subtitle } from '../titles/subtitle/Subtitle'
import { TypesRoutes } from '../../routes/TypesRoutes'
import { validatorEmail, validationName, validatorPassword } from '../../utils/validation'
import { SingInContext } from '../../Pages/singIn/SingInContext'
import "./singInForm.css"
import { useAuth } from '../../context/authContext/AuthContext'
import { postUser } from '../../services/postUser'

export function SingInForm() {
  const { userRegistro, setUserRegistro } = useContext(SingInContext)
  const { rol, setRol, signup } = useAuth()
  const navegate = useNavigate()
  const handleChangeEmail = (e) => {
    const posibleEmail = e.target.value.trim()
    if (validatorEmail.test(posibleEmail)) {
      setUserRegistro(
        {
          ...userRegistro,
          email: posibleEmail
        }
      )
    } else {
      console.log("El Email no cumple con los requisitos o no es valido")
    }
  }
  const handleChangeName = (e) => {
    const posibleName = e.target.value.trim()
    if (validationName.test(posibleName)) {
      setUserRegistro(
        {
          ...userRegistro,
          nombre: posibleName.toLowerCase()
        }
      )
    } else {
      console.log("EL nombre no cumple con los requisitos")
    }
  }
  const handlePassword = (e) => {
    const posiblePassword = e.target.value.trim()
    if (validatorPassword.test(posiblePassword)) {
      setUserRegistro(
        {
          ...userRegistro,
          password: posiblePassword
        }
      )
    } else {
      console.log("La contraseña no cumple con los requisitos")
    }
  }

  const handleClickRegister = async (e) => {
    e.preventDefault()
    if (userRegistro.email != "" && userRegistro.password != "") {
      const response = await postUser(userRegistro.nombre, userRegistro.email, rol)
      if (!response.ok) { throw new Error("Error al registrar usuario en la bbdd") }
      try {

        const user = await signup(userRegistro.email, userRegistro.password,)
        navegate(TypesRoutes.HOME)
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Falta algo") //EN estos else debería haber cambios en
    }
  }
  return (
    <form className='singInForm'>
      <Title className="singInForm__title">Registrate</Title>
      <header className='singInForm__header'>
        <Subtitle className="singInForm__subtTitle"> Nombre </Subtitle>
        <input type="text" className='singInForm__Input input--name'
          onChange={handleChangeName} />
        <Subtitle className="singInForm__subtTitle">Email</Subtitle>
        <input type="text" className='singInForm__Input input--email' onChange={handleChangeEmail} />
        <Subtitle className="singInForm__subtTitle">Contraseña</Subtitle>
        <input type="text" className='singInForm__Input input--password' onChange={handlePassword} />
      </header>
      <footer className='singInForm__footer'>
        <input className='singInForm__button' type="submit" value="Crear cuenta" onClick={handleClickRegister} />
        <h6 className='singInForm__footer__subtitle'>Ya esta registrado? <Link className='singInForm__footer__link' to={TypesRoutes.LOG_IN}>Iniciar sesion</Link> </h6>
      </footer>
    </form>
  )
}
