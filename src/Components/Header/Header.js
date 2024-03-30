import React from 'react';
import "./Header.css";
import { AiFillHome } from "react-icons/ai";
import { IoNotifications } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className='header'>
      <h1 className='header__logo'>TravelMedia.in</h1>
      <div className='header__icons'>
          <div className="icon-container">
            <AiFillHome className="icon" size={30}/>
          </div>
          <div className="icon-container">
            <IoNotifications className="icon" size={30} />
          </div>
          <div className="icon-container">
            <FaBookmark className="icon" size={30}/>
          </div>
          <div className="icon-container">
            <FaUserAlt className="icon" size={30}/>
          </div>
      </div>
    </div>
  )
}

export default Header