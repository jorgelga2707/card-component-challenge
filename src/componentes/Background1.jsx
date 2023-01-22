import React from 'react'
import bg1 from '../assets/bg-pattern-top.svg'
import bg2 from '../assets/bg-pattern-bottom.svg'
import './Background1.css'

const Background1 = () => {
  return (
    <div className='Background1'>
      <img className='img-bottom' src={bg1} alt="background bottom" />
      <img className='img-top' src={bg2} alt="background top" />
    </div>
  )
}

export default Background1
