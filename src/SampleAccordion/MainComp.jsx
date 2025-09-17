import React from 'react'
import { useState } from 'react'

import './Accordion.css'



const MainComp = ({items}) => {

  const [activeId , setActiveId] = useState(null);

  const toggleAccordion = (id)=>{
    setActiveId(activeId === id ? null : id)
  };


  return (
    <div className='Main-container'>
       {items.map((item)=>(
        <div key={item.id} 
        style={{boxShadow:'0px 4px 16px 0px #bfbfbf'}}>
            <h3 style={{cursor:'pointer', 
              background: '#eee', 
              padding:'10px',
              borderRadius:'5px',
              color: '#2f70acff',fontFamily:'Roboto',fontSize: '20px',
              fontWeight: '500'}} 
              onClick={()=> toggleAccordion(item.id)}>
                {item.question}</h3>
            {activeId === item.id && (<p style={{padding:'10px', background:'#f9f9f9', color:'#e3852eff', fontFamily:'Roboto', fontSize:'16px', fontWeight:'500'}}>{item.answer}</p>)}
        </div>
       ))}
    </div>
  )
}

export default MainComp