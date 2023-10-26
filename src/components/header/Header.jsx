import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductsContext } from "../../context/productsContext"
import { ProfileButtons } from "../buttons/ProfileButtons"
import { IgnoreButtons } from "../buttons/IgnoreButtons"
import { BsSearch } from "react-icons/bs"
import "./header.css"

export function Header() {
  const { user } = useContext(ProductsContext)
  return (
    <header className="header">
      <div className="header--container">
        <div className="header__img--container">
          <img src={logo} alt="" className="header__logo" />
        </div>
        <div className="header__img--container">
          {
            !user.name ? <IgnoreButtons /> : <ProfileButtons />
          }
        </div>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list--container">
            <Link to="/" className="header__nav__button">Inicio</Link>
            <Link to="/products" className="header__nav__button">Productos</Link>
          </li>
          <li className="header__nav__list--container">
            <input type="text" className="header__nav__list__inputText" />
            <BsSearch className="header__nav__list__icon" />
          </li>
          <li className="header__nav__list--container">
            <Link to="/about-Us" className="header__nav__button">Nosotros</Link>
            <Link to="/preguntas-frecuentes" className="header__nav__button">Preguntas frecuentes</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
