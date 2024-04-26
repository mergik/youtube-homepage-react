import React from 'react'

const Footer = () => {
  return (
    <div className='p-2 text-white bg-slate-800'>
      <div className='flex flex-wrap m-2 space-x-2 '>
        <a href='#'>About</a>
        <a href='#'>Press</a>
        <a href='#'>Copyright</a>
        <a href='#'>Contact Us</a>
        <a href='#'>Creators</a>
        <a href='#'>Advertise</a>
        <a href='#'>Developers</a>
      </div>
      
      <div className='flex flex-wrap m-2 space-x-2'>
        <a href='#'>Terms</a>
        <a href='#'>Privacy</a>
        <a href='#'>Policy & Safety</a>
        <a href='#'>How YouTube works</a>
        <a href='#'>Test New Features</a>
      </div>

      <p className='m-2 font-thin text-gray-500'>© 2024 Task Force LLC</p>
    </div>
  )
}

export default Footer