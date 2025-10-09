import React, { useEffect, useState } from 'react'

const GetFetch = () => {


  const [items , setItems] = useState([]);



  const url = "https://meenamaquaneeds-backend.onrender.com/getall"

  const getAllData = async()=>{

    try{
      const val = await fetch(url)
      const getData = await val.json()
      setItems(getData.data.categories)
      console.log(getData.data.categories)

    }
    catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
  	getAllData()
  },[])
  
  
  return (
    <>
      <div >
        {items.map((x,i)=>{
			return(
				<div key={i}>
						<ul>
							<h3>Categories</h3>
							<li>{x.name}</li>
							{x.products.map((y,i)=>{
								return (
									<div>
										<h3>Products</h3>
										<p>{y.name}</p>
										<img src={y.image} alt='' />
										<p>{y._id}</p>
									</div>
								)
							})}
							</ul>	

				</div>
			)
		})}
      </div>
    </>
  )
}

export default GetFetch