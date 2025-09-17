import React from 'react'
import SecondComp from './SecondComp'

    const students=[
    {
        name : "rasool", id:123 , role : "tester"
    },
    {
         name : "Suresh", id:456 , role : "Developer"
    },
    {
         name : "Manoj", id:156 , role : "reactjs"
    },
    {
         name : "tirumal", id:567 , role : "scriptjs"
    }
]



const FirstComp = (props) => {


  return (
    <>
        <div>{props.name}</div>

        <SecondComp items={students}/>
       
    </>
    
  )
}

export default FirstComp