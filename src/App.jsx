import React from 'react'
import './App.css';
import Navbar from './Navbar/Navbar'
import Main from './Main/Main'
import Develop  from './Testing/Develop'
import Projects from './Projects/Projects';
import Sidebar from './Sidebar/Sidebar';
import Homepage from './Homepage/Homepage/Homepage';
import Text from './Homepage/Text/Text'




function App() {
  return (
    <div className='containere'>   
      {/* <Navbar/> */}
      {/* <Text/> */}
      {/* <Main/> */}
      {/* <Develop/> */}
      {/* <Projects/> */}
      {/* <Sidebar/> */}
     <Homepage/>
    
    </div>

  )
}

export default App
