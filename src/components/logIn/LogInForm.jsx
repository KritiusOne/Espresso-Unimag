import React from 'react'
import "./loginForm.css"

export function LogInForm() {
  return (
    <form className="form">
      <div className="form--container">
        <h3 className="form--container__subtitle">Correo Electronico</h3>
        <input className="form--container__input input--text" type="text" name="" id="" />
      </div>
      <div className="form--container">
        <h3 className="form--container__subtitle">Contraseña</h3>
        <input className="form--container__input input--password" type="password" name="" id="" />
      </div>
      <input type="submit" value="Iniciar Sesion" className="form__button" />
    </form>
  )
}
