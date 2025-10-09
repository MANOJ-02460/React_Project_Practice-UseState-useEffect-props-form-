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
import { Route, Routes } from 'react-router-dom'
import Home from './Browser/Home'
import About from './Browser/About'
import Course from './Browser/Course'
import Contact from './Browser/Contact'
import Navbar from './Navbar'
import StarRating from './StarRating/StarRating'
import SetTime from './SetTime'
import Api from './Api'
import ApiImage from './ApiImage'
import GetFetch from './getFetch'
import Post from './Post'
import PostWithStatus from './PostWithStatus'


function App() {
  
  return (
    <>
      {/* <FirstComp name="Student Details"/>
      <FormInt/>
      
      <Login/>
      
      <Index/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/course' element={<Course/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes> 
      <StarRating  noOfStar={10}/> 
      <SetTime/>
      
      <Api/>
      <ApiImage/> 

      <GetFetch/> 
      <Post/>*/}
      <PostWithStatus/>
      {/* <MainComp/> */}
      <AccordionData />

    </>
  )
}


export default App
