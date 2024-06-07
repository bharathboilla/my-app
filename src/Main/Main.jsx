import React from 'react'
import vector from '../Assets/404/help.svg'
import './main.css'
function Main() {
  return (
    <div className='container'>
        <div className='emptyspace'>

        </div>
        
        <div className='main-img'>
            <img src={vector} alt="Helping Symbol" />
        </div>
            <div className='text-box'>
                <div className='Error-msg'>
                    <h3>Error 404:Looks like you've gone off course</h3>
                    <h6>We can’t find the page you’re looking for. Let’s go home?</h6>
                
                </div>
                <div className='Note-1'>
                    <div className='sections'>
                        <h4> <button>Back to Home</button></h4>
                        <div className='section'>
                        <h4> <button>Visit Our Help Centre</button></h4>
                        </div>
                    </div>
                </div>
                    <div className='main-note'>
                            <div className='note'>
                            <h6>Note</h6><br />
                            </div>
                            <div className='note-content'>
                            <h4>If you still not finding what yoy need,
                            please feel free to <a href="#">reach out</a> to our
                            support team who will be more than happy to say</h4>
                        
                            </div>
                    </div>
            </div>
    </div>
  )
}

export default Main
