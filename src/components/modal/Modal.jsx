import React, { useContext } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { InicioContext } from '../../Pages/Inicio/InicioContext'
import "./modal.css"

export function Modal({ children }) {
  const { setViewModal } = useContext(InicioContext)
  const handleClickCloseModal = () => {
    setViewModal(false)
  }
  return (
    <section className='modalOverlay'>
      <section className='modal'>
        <AiOutlineCloseCircle className="modal__icon" onClick={handleClickCloseModal} />
        <main className='modal__main'>
          {
            children
          }
        </main>
      </section>
    </section>
  )
}
