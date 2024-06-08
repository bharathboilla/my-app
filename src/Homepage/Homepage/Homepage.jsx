import React from 'react'
import style from './Homepage.module.scss'


import Text  from '../Text/Text'
import Photosbox from '../Photosection/Photosbox'

function Homepage() {
  return (
    <div className={style.container} >
      <div className={style.sectiontop}>
      <Text/>
      </div>
      <div className={style.imagesection}>
        <Photosbox/>
      </div>
    </div>
  )
}

export default Homepage
