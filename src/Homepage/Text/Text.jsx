import React, { useState } from 'react';
import velogo from '../../Assets/Navbar/VE logo_white 2.svg';
import style from './Text.module.scss';
import Glogo from '../../Assets/Homepage images/Group 3008.svg';

function Text() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [placeholder, setPlaceholder] = useState('Email id');
  const [inputType, setInputType] = useState('email');
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleClick = async () => {
    if (inputType === 'email') {
      // Email validation regex pattern
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(email)) {
        setError('Please enter a valid email address');
        return;
      }

      setPlaceholder('Password');
      setInputType('password');
      setError('');
    } else if (inputType === 'password') {
      if (!password) {
        setError('Please enter a password');
        return;
      }

      // Call a dummy API and display the output as a popup
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        alert(`API Response: ${JSON.stringify(data)}`);
      } catch (error) {
        alert(`API Error: ${error.message}`);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (inputType === 'email' && e.key === 'Enter') {
      handleClick();
    } else if (inputType === 'password' && e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className={style.container}>
      <div className={style.welcome}>
        <h2>Welcome to <img src={velogo} alt="velogo" /></h2>
        <div className={style.message}>
          <h2>Your AI assistant for work</h2>
        </div>
        <div className={style.inputbox}>
          <img src={Glogo} alt="google logo" />
          <input
            type={inputType}
            placeholder={placeholder}
            value={inputType === 'email' ? email : password}
            onChange={inputType === 'email' ? handleInputChange : (e) => setPassword(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className={style.error}>{error}</div>
        <div className={style.gobutton}>
          <button onClick={handleClick}>Go</button>
        </div>
      </div>
      <div className={style.role}>
        <h2>CHOOSE YOUR</h2>
        <div className={style.leftname}>
          <h1>AI TYPE AND TOOLS</h1>
        </div>
        <div className={style.middlename}>
          <h2>BUILT FOR EACH</h2>
        </div>
        <div className={style.rightname}>
          <h1>ROLE & PROFESSION</h1>
        </div>
      </div>
    </div>
  );
}

export default Text;
