import { LogInForm } from '../../components/logIn/LogInForm.jsx'
import { Header } from '../../components/header/Header.jsx'
import './App.css'

export function Login() {
  return (
    <div className="Login">
      <Header />
      <div className="Login__container">
        <h1 className="Login__title">Iniciar Sesion</h1>
        <LogInForm />
      </div>
    </div>
  )
}