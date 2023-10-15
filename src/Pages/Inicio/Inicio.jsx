import React from 'react'
import { Header } from "../../components/header/Header.jsx"
import info from "../../utils/datafake/products.json"
import "./inicio.css"

export function Inicio() {
  return (
    <div className="Inicio">
      <Header />
      <main className='inicio__main'>
        {
          JSON.stringify(info)
        }
      </main>
    </div>
  )
}
