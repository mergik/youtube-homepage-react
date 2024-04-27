import React from "react";

const Footer = () => {
  return (
    <div className="p-2 text-sm text-left text-gray-300">
      <div className="flex flex-wrap m-2 space-x-2">
        <a href="#">About</a>
        <a href="#">Press</a>
        <a href="#">Copyright</a>
        <a href="#">Contact Us</a>
        <a href="#">Creators</a>
        <a href="#">Advertise</a>
        <a href="#">Developers</a>
      </div>

      <div className="flex flex-wrap m-2 space-x-2">
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
        <a href="#">Policy & Safety</a>
        <a href="#">How YouTube works</a>
        <a href="#">Test New Features</a>
      </div>

      <p className="m-2 font-light text-xs text-gray-500">© 2024 - 20955 Task Force</p>
    </div>
  );
};

export default Footer;
