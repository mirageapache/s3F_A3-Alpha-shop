import { ReactComponent as SvgIconLeft } from "sources/icons/left-arrow.svg";
import { ReactComponent as SvgIconRigth } from "sources/icons/right-arrow.svg";

import style from '../../../styles/css/ProcessControl.module.css'

export default function ProcessControl({page_index, onClick}){
  return(
    <div id="process_control" className="container">
      <hr></hr>
      <div className={style.control_div}>
        { page_index > 1 && <PrevButton index={page_index} onClick={onClick}/>}
        { page_index < 3 && <NextButton index={page_index} onClick={onClick}/>}
        { page_index === 3 && <button type="" className={style.submit_order}>確認下單</button>}
      </div>
    </div>
  )
}

// 上一步Button
function PrevButton ({index, onClick}){
  let new_index = index - 1
  return(
    <>
      <button className={style.last_step} onClick={() => {onClick(new_index)}}>
        <SvgIconLeft />
        上一步
      </button>
    </>
  )
}

// 下一步Button
function NextButton ({index, onClick}){
  let new_index = index + 1
  return(
    <>
      <button className={style.next_step} onClick={() => {onClick(new_index)}}>
        下一步 
        <SvgIconRigth />
      </button>
    </>
  )
}
