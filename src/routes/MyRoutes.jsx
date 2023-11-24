import { Routes, Route } from "react-router"
import { Login } from "../Pages/login/Login"
import { ProductosExporter } from "../Pages/productos/ProductosExporter"
import { Nosotros } from "../Pages/nosotros/Nosotros"
import { Preguntas } from "../Pages/preguntas/Preguntas"
import { SingInIndex } from "../Pages/singIn/SingInIndex"
import { PrivateRoutes, TypesRoutes } from "./TypesRoutes"
import { AuthGuard } from "../guards/Auth.guard"
import { UserProfile } from "../Pages/user/UserProfile"
import { InicioRegistro } from "../Pages/inicioRegistro/InicioRegistro"
import { AntiAuthGuard } from "../guards/AntiAuth.guard"
import { FinalizarCompra } from "../Pages/finalizarCompra/FinalizarCompra"

export function MyRoutes() {
  return (
    <Routes>
      <Route element={<AntiAuthGuard />} >
        <Route path={TypesRoutes.LOG_IN} element={<Login />} />
      </Route>
      <Route element={<AntiAuthGuard />} >
        <Route path={TypesRoutes.SING_IN} element={<SingInIndex />} />
      </Route>

      <Route path={TypesRoutes.HOME} element={<InicioRegistro />} />
      <Route path={TypesRoutes.ABOUT_US} element={<Nosotros />} />
      <Route path={TypesRoutes.PREGUNTAS_FRECUENTES} element={<Preguntas />} />
      <Route path={TypesRoutes.PRODUCTS} element={<ProductosExporter />} />
      <Route path={TypesRoutes.ERROR_404} element={<>Error 404 no encontrado</>} />

      <Route element={<AuthGuard />}>
        <Route path={PrivateRoutes.PROFILE} element={<UserProfile />} />
      </Route>
      <Route element={<AuthGuard />} >
        <Route path={PrivateRoutes.CONFIRM_SHOP} element={<FinalizarCompra />} />
      </Route>
    </Routes>
  )
}
