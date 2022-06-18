import React from 'react'
import './Library.css'

import Navbar from '../navbar/Navbar'

function Library() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <h1>Library</h1>
      </div>
    </div>
  )
}

export default Library