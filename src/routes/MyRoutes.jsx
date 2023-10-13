import { Routes, Route } from "react-router"
import { Login } from "../Pages/login/Login"

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/logIn" element={<Login />} />
    </Routes>

  )
}
