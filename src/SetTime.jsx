import React from 'react'
import { useState, useEffect } from 'react'


const SetTime = () => {

    const [count, setCount] = useState(0);

     useEffect(()=>{

        const countDown = setInterval(()=>{
            setCount((prev)=>{

                if(prev >= 70){

                    clearInterval(countDown)
                    return prev;
                     
                }
                return prev + 1
            });
        }, 1000);

        return ()=> clearInterval(countDown)
     }, [count]);

  return (
    <div>
        <h1>count: {count}</h1>
    </div>
  )
}

export default SetTime