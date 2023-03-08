import React from "react";
import { createPortal } from "react-dom";
import { Backdrop, ModalWindow } from "./Modal.style";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends React.Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    };

    handleKeyDown = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        }
    };
     
    handleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    };

    render() {
        return createPortal(
        <Backdrop onClick={this.handleBackdropClick}>
          <ModalWindow>{this.props.children}</ModalWindow>
        </Backdrop>,
        modalRoot
        );
    }
}