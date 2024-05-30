import React from 'react';
import './Navbar.css';
import logo from '../Assets/Navbar/VE logo_white 2.svg';
import spark from '../Assets/Navbar/Frame 427321518.svg';
import Icon from '../Assets/Navbar/Frame 2997.svg';
import vector from '../Assets/Navbar/Vector.svg';

function Navbar() {
  return (
    <div className='box'>
      <div className='image'>
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <div className='navtools'>
          <ul className='nav-items'>
            <li><a href="#marketing">Marketing</a></li>
            <li><a href="#Sales">Sales</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#storage">Storage</a></li>
          </ul>
        </div>
      </nav>
      <div className='lightning'>
        <button onClick={() => alert('Spark clicked!')} className='icon-button'>
          <img src={spark} alt="Spark" />
        </button>
      </div>
      <div className='profile'>
        <button onClick={() => alert('Profile clicked!')} className='icon-button'>
          <img src={Icon} alt="Profile" />
        </button>
      </div>
      <div className='dropdown'>
        <button onClick={() => alert('Dropdown clicked!')} className='icon-button'>
          <img src={vector} alt="Vector" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
