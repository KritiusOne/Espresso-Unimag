import { useState, useContext, useEffect } from 'react'
import { ProductsContext } from "../../context/productsContext"
import { Title } from '../titles/title/Title'
import { Subtitle } from '../titles/subtitle/Subtitle'
import { useNavigate } from 'react-router'
import { TypesRoutes } from "../../routes/TypesRoutes.js"
import "./loginForm.css"

export function LogInForm() {
  const context = useContext(ProductsContext)
  const navegate = useNavigate()
  const [userPending, setUserPending] = useState({
    username: "",
    password: ""
  })
  let validatorEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  useEffect(() => {
    if (context.user.name) {
      navegate(TypesRoutes.HOME)
    }
  }, [context.user])
  const handleSubmit = (e) => {
    e.preventDefault()
    //Aquí hariamos una peticion asincronica por medio de un custom hook
    context.getUser(userPending.username, userPending.password)
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
