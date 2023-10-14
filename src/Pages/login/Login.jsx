import { LogInForm } from '../../components/logIn/LogInForm.jsx'
import { Header } from '../../components/header/Header.jsx'
import './App.css'

export function Login() {
  return (
    <div className="Login">
      <Header />
      <main className="Login__container">
        <LogInForm />
      </main>
    </div>
  )
}