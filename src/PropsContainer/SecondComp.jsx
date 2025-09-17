import React from 'react'

const SecondComp = ({items}) => {
  return (
    <div>
        <ul>
            {items.map((student)=>(
                <li key={student.id}>
                    {student.name}-{student.role}  ID:{student.id}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default SecondComp