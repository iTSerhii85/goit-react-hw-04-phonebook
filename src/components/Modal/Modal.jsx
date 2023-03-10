import  { useEffect } from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalWindow } from "./Modal.style";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({onClose, children}) => {

    useEffect(() => {
        const handleKeyDown = evt => {
            if (evt.code === 'Escape') {
                onClose();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
      },[onClose]);

    const handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
        }
    };

        return createPortal(
        <Backdrop onClick={handleBackdropClick}>
          <ModalWindow>{children}</ModalWindow>
        </Backdrop>,
        modalRoot
        );
}

export default Modal;