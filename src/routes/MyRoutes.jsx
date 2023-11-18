import { Routes, Route } from "react-router"
import { Login } from "../Pages/login/Login"
import { InicioExporter } from "../Pages/Inicio/InicoExporter"
import { Productos } from "../Pages/productos/Productos"
import { Nosotros } from "../Pages/nosotros/Nosotros"
import { Preguntas } from "../Pages/preguntas/Preguntas"
import { SingInIndex } from "../Pages/singIn/SingInIndex"
import { TypesRoutes } from "./TypesRoutes"
import { AuthGuard } from "../guards/Auth.guard"

export function MyRoutes() {
  return (
    <Routes>
      <Route path={TypesRoutes.HOME} element={<InicioExporter />} />
      <Route path={TypesRoutes.LOG_IN} element={<Login />} />
      <Route path={TypesRoutes.ABOUT_US} element={<Nosotros />} />
      <Route path={TypesRoutes.PREGUNTAS_FRECUENTES} element={<Preguntas />} />
      <Route path={TypesRoutes.SING_IN} element={<SingInIndex />} />
      <Route path={TypesRoutes.ERROR_404} element={<>Error 404 no encontrado</>} />
      <Route path={TypesRoutes.PRODUCTS} element={<Productos />} />

    </Routes>

  )
}
