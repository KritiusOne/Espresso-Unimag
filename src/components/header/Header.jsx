import "./header.css"
export function Header() {
  return (
    <header className="header">
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
