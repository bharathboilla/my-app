import React from 'react'
import velogo from '../../Assets/Navbar/VE logo_white 2.svg'
import style from './Text.module.scss'

function Text() {

  return (
    <div className={style.container}>
      <div className={style.welcome}>
        <h2>Welcome to <img src={velogo} alt="velogo" /></h2>
        <div className={style.message}>
         <h2>Your AI assistant for work</h2>
        </div>
        <div className={style.inputbox}>
        <input type="text" placeholder='Email id'/>
        </div>
        <div className={style.gobutton}>
        <button>Go</button>
        </div>
       
      </div>
      <div className={style.role}>
        <h2>CHOOSE YOUR</h2>
        <div className={style.leftname}>
          <h1>AI TYPE AND TOOLS</h1></div>
        <div className={style.middlename}>
          <h2>BUILT FOR EACH</h2>
        </div>
        <div className={style.rightname}>
        <h1>ROLE & PROFFESSION</h1>
        </div>
      </div>
    </div>
  )
}

export default Text
