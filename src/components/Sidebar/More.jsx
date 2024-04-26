import React from 'react'

const More = () => {
  return (
    <div className='bg-yellow-400'>
        <p>More from YouTube</p>

        <div className="flex">
        <img
          src="https://img.icons8.com/?size=48&id=19318&format=png"
          className="h-6"
        ></img>
            <p>YouTube Premium</p>
        </div>

        <div className="flex">
            <img src='https://img.icons8.com/?size=48&id=RffCjm5IOnEC&format=png' className='h-6'/>
            <p>YouTube Studio</p>
        </div>
        <div className="flex">
            <img src='https://img.icons8.com/?size=48&id=V1cbDThDpbRc&format=png' className='h-6'/>
            <p>YouTube Music</p>
        </div>
        <div className="flex">
            <img src='https://img.icons8.com/?size=48&id=80495&format=png' className='h-6'/>
            <p>YouTube Kids</p>
        </div>
    </div>
  )
}

export default More