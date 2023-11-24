import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from './routes/MyRoutes'
import { AuthProvider } from './context/authContext/AuthContext'
import { ProductsContextProvider as MetaInfoContext } from './context/ProductsContextProvider'
import './index.css'
import { Header } from './components/header/Header';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <MetaInfoContext>
        <Header />
        <MyRoutes />
      </MetaInfoContext>
    </AuthProvider>
  </BrowserRouter>
)