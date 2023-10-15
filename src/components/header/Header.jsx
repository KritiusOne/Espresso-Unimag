import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import "./header.css"

export function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <div className="header__img--container">
          <img src={logo} alt="" className="header__logo" />
        </div>
        <div className="header__img--container">
          <Link to="/login" className="header__button--LogIn">
            Iniciar Sesion
          </Link>
          <Link to="/singIn" className="header__button--SingIn">
            Registrarse
          </Link>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <div className="header__nav__list--container">
            <Link to="/" className="header__nav__button">Inicio</Link>
            <Link to="/products" className="header__nav__button">Productos</Link>
          </div>
          <div className="header__nav__list--container">
            <input type="text" />
          </div>
          <div className="header__nav__list--container">
            <Link to="/about-Us" className="header__nav__button">Nosotros</Link>
            <Link to="/preguntas-frecuentes" className="header__nav__button">Preguntas frecuentes</Link>
          </div>
        </ul>
      </nav>
    </header>
  )
}
