import { Routes, Route } from "react-router"
import { Login } from "../Pages/login/Login"
import { Inicio } from "../Pages/Inicio/Inicio"
import { Productos } from "../Pages/productos/Productos"
import { Nosotros } from "../Pages/nosotros/Nosotros"
import { Preguntas } from "../Pages/preguntas/Preguntas"
import { SingIn } from "../Pages/singIn/SingIn"

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/logIn" element={<Login />} />
      <Route path="/products" element={<Productos />} />
      <Route path="/about-Us" element={<Nosotros />} />
      <Route path="/preguntas-frecuentes" element={<Preguntas />} />
      <Route path="/singIn" element={<SingIn />} />
    </Routes>

  )
}
