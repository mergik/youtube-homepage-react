import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-2 text-sm text-left text-gray-300">
      <div className="flex flex-wrap m-2 space-x-2">
        <Link to="/about" className="hover:text-white">About</Link>
        <Link to="/press" className="hover:text-white">Press</Link>
        <Link to="/copyright" className="hover:text-white">Copyright</Link>
        <Link to="/contact" className="hover:text-white">Contact Us</Link>
        <Link to="/creators" className="hover:text-white">Creators</Link>
        <Link to="/advertise" className="hover:text-white">Advertise</Link>
        <Link to="/developers" className="hover:text-white">Developers</Link>
      </div>

      <div className="flex flex-wrap m-2 space-x-2">
        <Link to="/terms" className="hover:text-white">Terms</Link>
        <Link to="/privacy" className="hover:text-white">Privacy</Link>
        <Link to="/policy" className="hover:text-white">Policy & Safety</Link>
        <Link to="/how-it-works" className="hover:text-white">How YouTube works</Link>
        <Link to="/new-features" className="hover:text-white">Test New Features</Link>
      </div>

      <p className="m-2 font-light text-xs text-gray-500">© 2024 - 20955 Task Force</p>
    </div>
  );
};

export default Footer;
