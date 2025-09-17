import React, { useEffect, useState } from 'react'
import './style.css'

const Index = () => {

  const [typeOfColor, setTypeOfColor] = useState("Hex");
  const [color, setColor] = useState("#000");


  const randomColorUtility=(length)=>{

      return Math.floor(Math.random()*length)

  }



  const handleCreateRandomHexColor =()=>{

     const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

     let hexColor = "#" ; 

     for(let i=0; i<6; i++){
        
        hexColor += hex[randomColorUtility(hex.length)]        
     }  
     
     console.log(hexColor);
     
     
     setColor(hexColor)
  }

  const handleCreateRandomRgbColor=(length)=>{

    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`)
    console.log(color)

  }

  useEffect(()=>{

    if(typeOfColor === "rgb" ){
      handleCreateRandomRgbColor()
    }
    else{
      handleCreateRandomHexColor()
    }

  }, [typeOfColor])
 

  return (
    <div style={{backgroundColor:color, width:'100vw', height:'50vh', textAlign:'center', padding:'10px '}}>
        <button onClick={()=>setTypeOfColor("Hex")} style={{padding: '10px',}}>Create HEX Color</button>
        <button onClick={()=>setTypeOfColor("rgb")} style={{padding: '10px'}}>Create RGB Color</button>
        <button onClick={typeOfColor === "Hex" ? handleCreateRandomHexColor : handleCreateRandomRgbColor} style={{padding: '10px'}}>Generate Random Color</button>
        <div>
          <h1>{color}</h1>
        </div>
    </div>
  )
}

export default Index