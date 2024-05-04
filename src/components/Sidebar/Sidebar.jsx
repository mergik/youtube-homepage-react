import React, { useState } from 'react';
import Nav from './Nav';
import You from './You';
import Subscriptions from './Subscriptions';
import Explore from './Explore';
import More from './More';
import Footer from './Footer';
import Settings from './Settings';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger icon */}
      <button className="fixed top-4 left-4 z-50" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>
      {/* Sidebar */}
      <div className={`fixed top-[64px] left-0 bottom-0 bg-black text-white w-[250px] transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Nav />
        <You />
        <Subscriptions />
        <Explore />
        <More />
        <Settings />
        <Footer />
      </div>
    </>
  );
};

export default Sidebar;
