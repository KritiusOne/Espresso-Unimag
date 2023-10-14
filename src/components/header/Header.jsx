import logo from "../../assets/logo.png"
import "./header.css"
export function Header() {
  return (
    <header className="header">
      <div className="header--container">
        <div className="header__img--container">
          <img src={logo} alt="" className="header__logo" />
        </div>
        <div className="header__img--container">
          <span className="header__button--SingIn">
            Registrarse
          </span>
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <div className="header__nav__list--container">
            <li>Inicio</li>
            <li>Productos</li>
          </div>
          <div className="header__nav__list--container">
            <input type="text" />
          </div>
          <div className="header__nav__list--container">
            <li>Nosotros</li>
            <li>Preguntas frecuentes</li>
          </div>
        </ul>
      </nav>
    </header>
  )
}
