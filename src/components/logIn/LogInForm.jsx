import React from 'react'
import bgImg from '../../assets/bgLogin.jpg'
import "./loginForm.css"
import { Title } from '../titles/title/Title'
import { Subtitle } from '../titles/subtitle/Subtitle'

export function LogInForm() {
  return (
    <form className="form">
      <section className='form--container-inputs'>
        <Title>
          Bienvenido de vuelta
        </Title>
        <Subtitle>
          Iniciar sesión para continuar
        </Subtitle>
        <div className="form--container">
          <h3 className="form--container__subtitle">Correo Electronico</h3>
          <input className="form--container__input input--text" type="text" name="" id="" />
        </div>
        <div className="form--container">
          <h3 className="form--container__subtitle">Contraseña</h3>
          <input className="form--container__input input--password" type="password" name="" id="" />
        </div>
        <input type="submit" value="Iniciar Sesion" className="form__button" />
      </section>
      <section className='form--container__img'>
        <img src={bgImg} alt="Cafetería Unimagdalena" />
      </section>
    </form>
  )
}
