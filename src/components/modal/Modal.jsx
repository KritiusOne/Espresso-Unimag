import React, { useContext } from 'react';
import { Modal as BootstrapModal, Button } from 'react-bootstrap';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { InicioContext } from '../../Pages/Inicio/InicioContext';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './modal.css';

export function Modal({ children, ...props }) {
  const { setViewModal } = useContext(InicioContext);

  const handleCloseModal = () => {
    setViewModal(false);
  };

  return (
    <BootstrapModal show={true} onHide={handleCloseModal}>
      <BootstrapModal.Header closeButton>
        <AiOutlineCloseCircle className="modal__icon" onClick={handleCloseModal} />
      </BootstrapModal.Header>
      <BootstrapModal.Body {...props} className={`modal__main ${props.className}`}>
        {children}
      </BootstrapModal.Body>
    </BootstrapModal>
  );
}
