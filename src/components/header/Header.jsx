import { useContext } from "react"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { BsSearch } from "react-icons/bs"
import { IgnoreButtons } from "../buttons/IgnoreButtons"
import { ProfileButtons } from "../buttons/ProfileButtons"
import { ProductsContext } from "../../context/productsContext"
import { useAuth } from "../../context/authContext/AuthContext"
import "./header.css"

export function Header() {
  const { setFilterName } = useContext(ProductsContext)
  const { currentUser } = useAuth()
  const handleChangeFilter = (e) => {
    setFilterName(e.target.value)
  }
  return (
    <header className="header">
      <div className="header--container">
        <div className="header__img--container">
          <img src={logo} alt="" className="header__logo" />
        </div>
        <div className="header__img--container">
          {
            !currentUser ? <IgnoreButtons /> : <ProfileButtons />
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
            <input type="text" className="header__nav__list__inputText" onChange={handleChangeFilter} />
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
