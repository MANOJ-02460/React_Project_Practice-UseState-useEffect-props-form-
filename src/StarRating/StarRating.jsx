import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './style.css'
 
const StarRating = ({noOfStar=5}) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){

        setRating(getCurrentIndex)
        console.log(getCurrentIndex) 

    }
    
    function handleMouseMove(getCurrentIndex){

        setHover(getCurrentIndex)
    }

    function handleMouseLeave(getCurrentIndex){

        setHover(rating)
    }

  return (
    <div>
        <div className='star-rating'>
            {[...Array(noOfStar)].map((_,index)=>{
                index += 1
                return(
                   <FaStar key={index}
                    className={index <= (hover || rating)? 'active' : 'inActive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseMove(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    size={40}
                />
                )
            })}
        </div>
    </div>
  )
}

export default StarRating