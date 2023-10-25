import { LogInForm } from '../../components/forms/LogInForm.jsx'
import bgImg from '../../assets/bgLogin.jpg'
import { LayoutPage } from '../../components/layout/LayoutPage.jsx'
import './App.css'

export function Login() {
  return (
    <LayoutPage className="Login">
      <main className="Login__main">
        <LogInForm />
        <section className='form--container__img'>
          <img src={bgImg} alt="Cafetería Unimagdalena" />
        </section>
      </main>
    </LayoutPage>
  )
}