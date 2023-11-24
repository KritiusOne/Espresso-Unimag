import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductsContext } from "../../context/productsContext";
import { ProfileButtons } from "../buttons/ProfileButtons";
import { IgnoreButtons } from "../buttons/IgnoreButtons";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./header.css";

export function Header() {
  const { user, setFilterName } = useContext(ProductsContext);

  const handleChangeFilter = (e) => {
    setFilterName(e.target.value);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand me-auto" href="#">
            <img src={logo} alt="" className="header__logo" />
          </a>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                <img src={logo} alt="" className="header__logo" />
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" className="nav-link mx-lg-2 active" aria-current="page">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link mx-lg-2">
                    Productos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about-Us" className="nav-link mx-lg-2">
                    Nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/preguntas-frecuentes" className="nav-link mx-lg-2">
                    Preguntas frecuentes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="header_btn_container">
            {!user.name ? <IgnoreButtons /> : <ProfileButtons />}
          </div>
          <button
            className="navbar-toggler pe-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}
