import React, { useContext } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { InicioContext } from '../../Pages/Inicio/InicioContext'
import "./modal.css"

export function Modal({ children, ...props }) {
  const { setViewModal } = useContext(InicioContext)
  const handleClickCloseModal = () => {
    setViewModal(false)
  }
  return (
    <section className='modalOverlay'>
      <section className='modal'>
        <AiOutlineCloseCircle className="modal__icon" onClick={handleClickCloseModal} />
        <main {...props} className={`modal__main ${props.className}`} >
          {
            children
          }
        </main>
      </section>
    </section>
  )
}
