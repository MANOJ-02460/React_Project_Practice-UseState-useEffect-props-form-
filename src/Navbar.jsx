import React from 'react'



const navbar = [
    {name:"Home", path:"#"},
    {name:"About", path:"#"},
    {name:"Service", path:"#"},
    {name:"Contact", path:"#"}
]
const Navbar = () => {
  return (
    <div>
        { navbar.map((x,i)=>{
            return(
                <div>
                    <ul key={i}>
                        <li><a href={x.path}>{x.name}</a></li>
                    </ul>
                </div>
            )
        })}
    </div>
  )
}

export default Navbar