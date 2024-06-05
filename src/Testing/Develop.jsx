import React from 'react'
import './Develop.css'
import Error from '../Assets/404/help.svg'

const develop = () => {
  return (
    <div>
      <div className="error-page">
      <div className="error-content">
        <img
          src={Error} // You need to provide the correct path to the lifebuoy image
          alt="Lifebuoy through laptop"
          className="error-image"
        />
        <h1>Error 404: Looks like you've gone off course</h1>
        <div className="buttons">
          <button className="btn" onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
          <button className="btn" onClick={() => window.location.href = '/help'}>
            Visit Help Center
          </button>
        </div>
        <p className="note">
          If you're still not finding what you need, please feel free to <a href="/contact">reach out</a> to our support team who will be more than happy to help
        </p>
      </div>
    </div>
    </div>
  )
}

export default develop
