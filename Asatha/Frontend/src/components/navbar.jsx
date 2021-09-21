import React, { useState } from 'react';
import '../index.css';
import Basket from '../images/add-to-basket.svg';
import search from '../images/search.svg';
import menu from '../images/menu-button.svg';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="navbar">
      {/* <div className="top"> */}
      <div className="left">
        <a>
          <a className="brand" href="/Home">
            قسطها
          </a>
        </a>
      </div>

      <div className="middle">
        <input className="search" type="text" placeholder="Search"></input>
        <button className="searchbtn">
          <img src={search} alt="" />
        </button>
      </div>
      <div className="right">
        <div className="links" id={showLinks ? 'hidden' : ''}>
          <a href="/Cart">
            <img className="shpcrt" src={Basket} alt="" />
          </a>
          <a className="pi" href="/Login">
            Login
          </a>
          <a className="pi" href="/SignUp">
            Sign Up
          </a>
        </div>
        <button className="menubtn" onClick={() => setShowLinks(!showLinks)}>
          <img src={menu} alt="" />
        </button>
      </div>
      {/* </div> */}
      {/* <div className="bottom"></div> */}
    </div>
  );
}

export default Navbar;
