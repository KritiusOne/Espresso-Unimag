import React, { useState } from 'react'
import { InicioContext } from "./InicioContext.js"
import { Inicio } from './Inicio.jsx'
export function InicioContextProvider({ children }) {
  const [viewModal, setViewModal] = useState(false)
  return (
    <InicioContext.Provider value={{
      viewModal, setViewModal
    }}>
      {children}
    </InicioContext.Provider>
  )
}