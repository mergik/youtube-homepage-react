import React from 'react'
import Nav from './Nav'
import You from './You'
import Subscriptions from './Subscriptions'
import Explore from './Explore'
import More from './More'
import Footer from './Footer'
import Settings from './Settings'

const Sidebar = () => {
  return (
    <div className='bg-red-400 w-[220px]'>
        <Nav/>
        <You/>
        <Subscriptions/>   
        <Explore/>
        <More/>
        <Settings/>
        <Footer/>
    </div>
  )
}

export default Sidebar