import React, { useState } from "react";
import Nav from "./Nav";
import You from "./You";
import Subscriptions from "./Subscriptions";
import Explore from "./Explore";
import More from "./More";
import Footer from "./Footer";
import Settings from "./Settings";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="grid"
      style={{ gridTemplateColumns: isOpen ? "250px 1fr" : "1fr" }}
    >
      {/* Sidebar */}
      {isOpen && (
        <div
          className={`bg-black text-white transition-all duration-300 overflow-y-auto fixed top-16 left-0 bottom-0 w-64`}
          style={{ height: "calc(100vh - 64px)" }}
        >
          <Nav />
          <You />
          <Subscriptions />
          <Explore />
          <More />
          <Settings />
          <Footer />
        </div>
      )}
      {/* Main content */}
      <div className={`transition-all duration-300 ${!isOpen ? 'col-span-2' : ''}`}>

        {/* Your main content components */}
      </div>
      {/* Hamburger icon */}
      <button className="fixed top-4 left-4 z-50" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M3 12h18M3 6h18M3 18h18"></path>
        </svg>
      </button>
    </div>
  );
};

export default Sidebar;
