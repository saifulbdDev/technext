/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/button-has-type */
import React, { useEffect, useRef } from 'react'

import styles from '../assets/modal.module.css'

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
    const modalRef = useRef(null)
    useEffect(() => {
        if (show) {
            modalRef.current.classList.add(styles.visible)
        } else {
            modalRef.current.classList.remove(styles.visible)
        }
    }, [show])
    return (
        <>
            <div ref={modalRef} style={backdropStyle} className={`${styles.modal}`}>
                <div focusout={onClose} style={modalStyle} className={styles.modal__wrap}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Modal
