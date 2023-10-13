import { LogInForm } from '../../components/logIn/LogInForm.jsx'
import { Header } from '../../components/header/Header.jsx'
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <div>
        <h1>Iniciar Sesion</h1>
        <LogInForm />
      </div>
    </div>
  )
}

export default App
