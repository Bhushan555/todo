import React from 'react';
import './componentHeader.scss'

const ComponentHeader = ({title,isButton,handleShow}) => {
  return (
    <div className='componentHeader'> 
        <h2>{title}</h2>
        {isButton && (
          <button className='btn btn-primary me-4' onClick={handleShow}>Add New</button>
        )}
    </div>
  )
}

export default ComponentHeader