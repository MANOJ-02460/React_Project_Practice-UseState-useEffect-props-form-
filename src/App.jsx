import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComp from './PropsContainer/FirstComp'
import FormInt from './FormInt'
import MainComp from './TodoApp/MainComp'
import Login from './Login'
import AccordionData from './SampleAccordion/AccordionData'
import './SampleAccordion/Accordion.css'
import Index from './RandomColor'
import Navbar from './Navbar'

function App() {
  
  return (
    <>
      {/* <FirstComp name="Student Details"/> */}
      {/* <FormInt/> */}
      {/* <MainComp/> */}
      {/* <Login/> */}
      <AccordionData />
      <Index/>
      <Navbar/>
    </>
  )
}

export default App
