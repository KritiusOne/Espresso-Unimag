import { Routes, Route } from "react-router"
import App from "../Pages/login/Login"

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/logIn" element={<App />} />
    </Routes>

  )
}
