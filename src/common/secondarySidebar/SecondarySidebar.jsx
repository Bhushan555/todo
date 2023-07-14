import React from 'react'
import './secondarySidebar.scss'
import { Link } from 'react-router-dom'

const SecondarySidebar = () => {
  return (
    <div className='secondarySidebar'>
      <ul>
        <li>
          <Link to='/'>Task list</Link>
        </li>
        <li>
          <Link to='/add-task'>Add task</Link>
        </li>
      </ul>
    </div>
  )
}

export default SecondarySidebar