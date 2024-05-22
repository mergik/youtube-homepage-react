import React from 'react';
import Banner from "/ReactTube_About_Banner.webp"

export const AboutUs = () => {
  return (
    <div className="flex flex-col mt-[64px] items-center font-roboto bg-white">
      <div>
        <img src={Banner} className='w-screen'/>
      </div>

      <div className='m-10 max-w-[1024px]'>
        <h1 className='text-[120px] font-[700]'>About ReactTube</h1>
        <p className='mb-10 text-[72px]'>
          Our mission is to recreate the YouTube frontend to the best of our ability while interacting with React.
        </p>
        <p className='mb-10 text-[72px] font-thin'>
          This project does not include a backend and thus utilises the official YouTube API to fetch data directly from Youtube.
        </p>
        <p className='mb-10 text-[72px] font-thin'>
          This project utilizes the following technologies:
          <ul className='flex space-x-10 items-center text-[50px]'>
            <li><img className='h-12' src="https://img.icons8.com/?size=48&id=dJjTWMogzFzg&format=png" alt="Vite Logo"/> Vite</li>
            <li><img className='h-12' src="https://img.icons8.com/?size=48&id=108784&format=png" alt="JavaScript Logo"/> JavaScript</li>
            <li><img className='h-12' src="https://img.icons8.com/?size=80&id=NfbyHexzVEDk&format=png" alt="React Logo"/> React</li>
            <li><img className='h-12' src="https://img.icons8.com/?size=48&id=x7XMNGh2vdqA&format=png" alt="Tailwind Logo"/> Tailwind</li>
            <li><img className='h-12' src="https://img.icons8.com/?size=80&id=en2FZIAZdquE&format=png" alt="Git Logo"/> Git</li>
          </ul>
        </p>
      </div>

      <section className='mt-52 h-[200px] place-content-end w-screen bg-pattern'>
            <img src='/ReactTube_Logo-White.png'
            className='h-16 m-10 pt-5'/>
      </section>
    </div>
  );
};
