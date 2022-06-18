import React from 'react'
import './Home.css'

import Navbar from '../navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar />
      <div className='content'>
        <h1>Home</h1>
      </div>
    </div>
  )
}

export default Home