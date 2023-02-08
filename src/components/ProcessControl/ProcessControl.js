import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from "@fortawesome/free-solid-svg-icons";

import style from '../../styles/css/ProcessControl.module.css'

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
        <button type="" className={style.submit_order}>確認下單</button>
      </div>
    </div>
  )
}
