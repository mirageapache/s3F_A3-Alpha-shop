import { ReactComponent as SvgIconLogo } from "../sources/icons/logo.svg";
import { ReactComponent as SvgIconFB } from "../sources/icons/facebook.svg";
import { ReactComponent as SvgIconIG } from "../sources/icons/instagram.svg";
import { ReactComponent as SvgIconWapp } from "../sources/icons/whatsapp.svg";


import style from '../styles/css/Footer.module.css'

// 客戶服務 
const service = ['運送說明','退換貨相關','付款資訊','FAQ']
// 關於我們
const about = ['品牌故事','媒體聯繫','Press kit']
// 資訊
const information = ['隱私權政策','Cookie','GDPR']
// icon
const icons = [<SvgIconFB />, <SvgIconIG />, <SvgIconWapp />]

export default function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.footer_content}>
        <Brand />
        <FooterItem title="客戶服務" item={service}/>
        <FooterItem title="關於我們" item={about}/>
        <FooterItem title="資訊" item={information}/>
        <Subscribe icon={icons}/>
      </div>
    </div>
  )
}

// Logo 區塊
function Brand() {
  return (
    <div className={style.brand}>
      <a href="/">
        <SvgIconLogo />
      </a>
    </div>
  )
}

// FooterItem (客戶服務、關於我們、資訊)區塊
function FooterItem({title, item}) {
  return (
    <div className={style.item_box}>
      <h2>{title}</h2>
      <div>
        {item.map(item => <a className={style.footer_item} href="#">{item}</a>)}
      </div>
    </div>
  )
}


// Subscribe 區塊
function Subscribe({icon}) {
  return (
    <div className={style.subscribe}>
      <h2>追蹤ALPHA Shop</h2>
      <p>+886 02123-45678</p>
      {icon.map(icon => <a href="#">{icon}</a>)}
    </div>
  )
}

