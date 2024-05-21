import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-2 text-sm text-left text-gray-300">
      <div className="flex flex-wrap m-2 gap-x-2">
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/contact" className="hover:text-white">Contact Us</Link>
        <Link to="/copyright" className="hover:text-white">Copyright</Link>
      </div>

      <div className="flex flex-wrap m-2 gap-x-2">
        <a href="#" className="hover:cursor-default">Press</a>
        <a href="#" className="hover:cursor-default">Creators</a>
        <a href="#" className="hover:cursor-default">Advertise</a>
        <a href="#" className="hover:cursor-default">Developers</a>
        <a href="#" className="hover:cursor-default">Terms</a>
        <a href="#" className="hover:cursor-default">Privacy</a>
        <a href="#" className="hover:cursor-default">Policy & Safety</a>
        <a href="#" className="hover:cursor-default">How YouTube works</a>
        <a href="#" className="hover:cursor-default">Test New Features</a>
      </div>

      <p className="m-2 font-light text-xs text-gray-500">© 2024 - 20955 Task Force</p>
    </div>
  );
};

export default Footer;