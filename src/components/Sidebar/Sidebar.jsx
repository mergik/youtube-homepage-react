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
    <div className='w-[250px] mr-2 p-2 bg-black text-white'>
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