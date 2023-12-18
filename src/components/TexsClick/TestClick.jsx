import React, { useState } from 'react';
import './TestClick.css'
import Modal from '../Modal/Modal';



const TestClick = () => {
    const [modalActive, setModalActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const myArr = ['text1', 'text2', 'text3', 'text4']

    function ShowSelectedItem(item){
        setSelectedItem(item)
        setModalActive(true)

    }
   
            
    return (
        <>            
            <div className="main">
                {myArr.map((item, index) => (
                    <div key={index} className="onearr" onClick={() => ShowSelectedItem(item)}>
                        {item}
                    </div>
                ))
                }
            </div>   

            <Modal active={modalActive} setActive={setModalActive} >
                <div className='one_bigwindow'>
                  <p>{`test ${selectedItem}`}</p>
                </div>

            </Modal>

        </>
    );
};

export default TestClick;