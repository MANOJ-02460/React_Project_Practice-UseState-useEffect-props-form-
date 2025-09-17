import React from 'react'

const PropComp = ({username}) => {
  return (
    <div>
        <h2>Hello, {username || "Guest"} 👋</h2>
    </div>
  )
}

export default PropComp