import { useContext } from "react";
import { CartContext } from "components/CartContext.js";
import { FormContext } from "components/FormContext.js";
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
        { page_index === 3 && <FinishButton />}
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

// 確認下單Button
function FinishButton (){
  const data = useContext(FormContext)[0]
  const total_price = useContext(CartContext)[2]

  // submit function
  function handleSubmit(e){
    // 表單驗證
    if(data[0].value.length === 0){
      alert(`請輸入持卡人姓名!!`)
    }
    else if(data[1].value.length === 0){
      alert(`請輸入卡號!!`)
    }
    else if(data[2].value.length === 0){
      alert(`請輸入有效期限!!`)
    }
    else if(data[3].value.length === 0){
      alert(`請輸入CVC/CCV 編號!!`)
    }
    else {

      console.log(`感謝您的訂購，你的信用卡資訊如下：
      持卡人姓名：${data[0].value}
      卡號：${data[1].value}
      有效期限：${data[2].value}
      CVC/CCV：${data[3].value}
      本次消費總金額：$${total_price}`)

      alert(`感謝您的訂購，你的信用卡資訊如下：
      持卡人姓名：${data[0].value}
      卡號：${data[1].value}
      有效期限：${data[2].value}
      CVC/CCV：${data[3].value}
      本次消費總金額：$${total_price}`)
    }
      
  }

  return(
    <>
      <button type="submit" className={style.submit_order} onClick={(e) => handleSubmit(e)}>
        確認下單 
        <SvgIconRigth />
      </button>
    </>
  )
}