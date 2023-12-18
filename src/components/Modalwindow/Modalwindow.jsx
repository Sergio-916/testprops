import React from 'react';
import './Modalwindow.css'
import { IoIosCloseCircle } from "react-icons/io";

const Modalwindow = ({ isOpen, onClose, children }) => {

    const onWrapperClick = (event) => {
        if (event.target.classList.contains('modal-wrapper')) {
            onClose();
        }
    }

    return (
        <>
            {isOpen && (               
                    <div className="modal">
                        <div className="modal-wrapper" onClick={onWrapperClick}>
                            <div className="modal-content">
                                <button className='modal-close-btn'
                                    onClick={onClose}>
                                    <IoIosCloseCircle size={30} />
                                </button>
                                {children}
                            </div>
                        </div>
                    </div>              
            )}
        </>
    );
};

export default Modalwindow;