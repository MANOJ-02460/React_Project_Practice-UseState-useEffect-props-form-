import React, { useEffect, useState } from 'react'


const ApiImage = () => {

    const [data, getData] = useState([]);
     
    useEffect(()=>{
      fetch("https://api.kissanemart.com/api/getBanner")
     .then(res => res.json())
     .then(a => console.log(a.data));

    },[])
     
  return (
    <div>
        {data.map((x,i)=>{
            return(
                <div key={x.id}>
                    <p>{x}</p>
                </div>
            )
        })}
    </div>
  )
}

export default ApiImage 

