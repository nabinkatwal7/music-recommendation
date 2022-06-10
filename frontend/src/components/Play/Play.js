import React from 'react'
import TestMusic from './music/testmusic.mp4'

import ReactPlayer from 'react-player'
import './Play.css'

function Play() {
  return (
    <div className='play-div'>
      <h3>Title</h3>
      <ReactPlayer className="play" url={TestMusic} controls='true' width='1920px' height='5vh' />
    </div>
  )
}

export default Play
