import { ReactComponent as SvgIconLeft } from "../../../sources/icons/left-arrow.svg";
import { ReactComponent as SvgIconRigth } from "../../../sources/icons/right-arrow.svg";

import style from '../../../styles/css/ProcessControl.module.css'

export default function ProcessControl(){
  return(
    <div id="process_control" className="container">
      <hr></hr>
      <div className={style.control_div}>
        <button type="" className={style.last_step}>
          上一步
          <SvgIconLeft />
        </button>
        <button type="" className={style.next_step}>
          下一步 
          <SvgIconRigth />
        </button>
        <button type="" className={style.submit_order}>確認下單</button>
      </div>
    </div>
  )
}
