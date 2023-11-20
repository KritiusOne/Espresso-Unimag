import logo from "../../assets/logo.png"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { ProductsContext } from "../../context/productsContext"
import { ProfileButtons } from "../buttons/ProfileButtons"
import { IgnoreButtons } from "../buttons/IgnoreButtons"
import { BsSearch } from "react-icons/bs"
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el archivo CSS de Bootstrap
import "./header.css"

export function Header() {
  const { user, setFilterName } = useContext(ProductsContext)
  const handleChangeFilter = (e) => {
    setFilterName(e.target.value)
  }

  return (
    <header className="header">
      <div className="container bg-white">
        <div className="row">
          <div className="col-md-6">
            <div className="header_img_container">
              <img src={logo} alt="" className="header__logo" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="header_btn_container">
              {
                !user.name ? <IgnoreButtons /> : <ProfileButtons />
              }
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-between">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">Productos</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-Us" className="nav-link">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link to="/preguntas-frecuentes" className="nav-link">Preguntas frecuentes</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
