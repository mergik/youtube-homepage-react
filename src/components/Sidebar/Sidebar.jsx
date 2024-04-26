import React from 'react'
import Nav from './Nav'
import You from './You'

const Sidebar = () => {
  return (
    <div className='bg-red-800 w-[220px]'>
        <Nav/>
        <You/>     
    </div>
  )
}

export default Sidebar