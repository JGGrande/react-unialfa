import "./style.css";

import React, { ReactNode, useState, useEffect } from "react"


interface IModal {
    children: ReactNode;
    isOpen: boolean;
		onClose(): void
}

const Modal = ({children, isOpen, onClose}:IModal) => {


    return (
        <>
            <div
                className="modal"
                style={{
                    opacity: 1,
                    visibility: isOpen ? 'visible': "hidden"
                }}
            >

                <div
                    className="modal_content"
                    style={{
                        opacity: 1,
                        visibility: isOpen ? 'visible': "hidden"
                    }}
                >
                    <span
                        className="modal_close"
                        onClick={onClose}
                    >
                      &times;
                    </span>

                    {children}
                </div>

            </div>
        </>
    )
}

export default Modal

interface IModalHeader {
    children: React.ReactNode
}

export const ModalHeader = ({children}:IModalHeader) => {
    return (
        <div className="modal_header">
            {children}
        </div>
    )
}

interface IModalBody {
    children: React.ReactNode
}

export const ModelBody = ({children}:IModalBody) => {
    return (
        <div className="modal_body">
            {children}
        </div>
    )
}