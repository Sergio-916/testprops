import { useState } from 'react'

import './App.css'
import Component2 from './components/Component2'
import Component1 from './components/Component1'

import TestClick from './components/TexsClick/TestClick';


function App() {

  // const [modalOpen, setModalOpen] = useState(false)
  const [flag, setFlag] = useState(true);
  const [writeComp1, setWriteComp1] = useState('');
  



  function toggleFlag() {
    setFlag(prevState => !prevState);
  }

  console.log('flag', flag)

  function writeInComp(event) {
    setWriteComp1(event.target.value)
  }
  console.log(writeComp1)






  return (
    <>

      <Component1 toggleFlag={toggleFlag} writeInComp={writeInComp} />
      <Component2 flag={flag} writeComp1={writeComp1} />

      <hr />
      <TestClick />

      {/* <Modal active={modalActive} setActive={setModalActive} >

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus autem nam eos labore architecto distinctio tempora explicabo maxime molestiae, tempore laborum optio necessitatibus ratione dolore beatae, expedita aliquid! Harum, sunt?</p>
      </Modal>
      
      <button className='open__btn' onClick={() => setModalActive(true)}>ShowModal</button> */}


      {/* <main className='main'>
        <section className='section'>
          <button className='modal-show-btn'
            onClick={() => setModalOpen(true)}
          >Button</button>
          <Modalwindow
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
          >
            <h2>Modal info</h2>
            <Component2 flag={flag} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iusto inventore vero! Natus sit placeat itaque accusamus? Harum earum quos inventore. Maxime sint deleniti deserunt eos possimus in! Eligendi, illum.</p>
          </Modalwindow>

        </section>
      </main> */}


    </>
  )
}

export default App
