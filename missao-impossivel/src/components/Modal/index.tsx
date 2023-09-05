import "./style.css";

import React, { ReactNode, useState, useEffect } from "react"


interface IModal {
    children: ReactNode;
    isOpenProp: boolean;
}

const Modal = ({children, isOpenProp}:IModal) => {

    const [isOpen, setOpen] = useState<boolean>(isOpenProp)

    useEffect(()=>{
        console.log(isOpen)
    },[isOpen])


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
                        onClick={()=> setOpen(false)}
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