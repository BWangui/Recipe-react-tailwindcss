import React from 'react'
import background from 
const Header = () => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='relative w-full h-full'>
            <img src={images[Math.floor(Math.random() * images.length)]} alt="Recipes" className='w-full h-full object-cover'></img>
        </div>
    </div>
  )
}

export default Header