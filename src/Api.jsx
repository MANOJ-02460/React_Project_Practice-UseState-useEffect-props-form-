import React, { useEffect } from "react";

import { useState } from "react";

const Api = () => {
  const [data, setData] = useState([]);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div style={{display:'flex',justifyContent:'center',flexWrap:"wrap", gap:'20px',padding:'20px', backgroundColor:'#f5f7fa'}}>
        {data.map((x, i) => {
          return (
            <div key={x.id} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} style={{background:'#ffffff',boxShadow: hover ?"0 12px 24px rgba(0,0,0,0.2)" : "0 4px 10px rgba(0, 0, 0, 0.1)",  padding:'20px', width:'300px', transition:'transform 0.3s ease, box-shadow 0.3s ease', transform: hover ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)", cursor:"pointer", }}>
              <ul style={{ listStyleType: "none",margin:'0px', padding:'0px', color:'#333', fontFamily:'Segoe UI Tahoma Geneva Verdana sans-serif',}}>
				<li style={{color:'#444', fontSize:'15px', margin:'6px 0'}}><strong style={{color:'#008AD0', fontWeight:'600'}}>ID:</strong> {x.id}</li>
                <li style={{color:'#444', fontSize:'15px', margin:'6px 0'}}><strong style={{color:'#008AD0', fontWeight:'600'}}>Name:</strong> {x.name}</li>
                <li style={{color:'#444', fontSize:'15px', margin:'6px 0'}}><strong style={{color:'#008AD0', fontWeight:'600'}}>UserName:</strong> {x.username}</li>
                <li style={{color:'#444', fontSize:'15px', margin:'6px 0'}}><strong style={{color:'#008AD0', fontWeight:'600'}}>Email:</strong> {x.email}</li>
				<li style={{color:'#444', fontSize:'15px', margin:'6px 0'}}><strong style={{color:'#008AD0', fontWeight:'600'}}>Phone:</strong> {x.phone}</li>
				<li style={{color:'#444', fontSize:'15px', margin:'6px 0'}}><strong style={{color:'#008AD0', fontWeight:'600'}}>Website:</strong> {x.website}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Api;
