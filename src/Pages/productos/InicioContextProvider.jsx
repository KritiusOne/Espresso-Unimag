import React, { useState } from 'react'
import { InicioContext } from "./InicioContext.js"
import { Productos } from './Productos.jsx'
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