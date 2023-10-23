import { useState, useContext } from 'react'
import { ProductsContext } from "../../context/productsContext"
import { Title } from '../titles/title/Title'
import { Subtitle } from '../titles/subtitle/Subtitle'
import "./loginForm.css"

export function LogInForm() {
  const context = useContext(ProductsContext)
  const [userPending, setUserPending] = useState({
    username: "",
    password: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    //Aquí hariamos una peticion asincronica por medio de un custom hook
    context.getUser(userPending.username, userPending.password)
  }
  const handleChangeText = (e) => {
    setUserPending({
      ...userPending, username: e.target.value
    })
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
