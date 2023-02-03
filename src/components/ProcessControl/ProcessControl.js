import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faS, fas } from "@fortawesome/free-solid-svg-icons";

import style from './ProcessControl.module.css'

export default function ProcessControl(){
  return(
    <div id="process_control" className="container">
      <hr></hr>
      <div className={style.control_div}>
        <button type="" className={style.last_step}>上一步</button>
        <button type="" className={style.next_step}>
          下一步
          <FontAwesomeIcon className={style.arrow_icon} icon={fas.faArrowRightLong}/>
        </button>
      </div>
    </div>
  )
}
