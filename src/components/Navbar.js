import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// import style from './Navbar.module.css'
import style from '../styles/css/Navbar.module.css'

// NavItem 
const items = [
  '男款',
  '女款',
  '最新消息',
  '客製商品',
  '聯絡我們'
]

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <NavItem items={items}/>
      <NavBrand />
      <NavIcon />
    </div>
  )
}

function NavItem(prop) {
  const items = prop.items
  const NavItems = items.map(item => 
    <li className={style.nav_item} key={item.toString()}>
      {item}
    </li>
  )

  return(
    <div className={style.item_div}>
      <ul>
        {NavItems}
      </ul>
    </div>
  )
}

function NavBrand() {
  return (
    <div className={style.brand}>
      <img className={style.brand_img} src="./images/logo192.png" alt="Alpha Shop" />
      <p className={style.brand_text}>ALPHA Shop</p>
      
    </div>
  )
}

function NavIcon() {
  return (
    <div className={style.icon_div}>
      <Icon icon={fas.faMagnifyingGlass} />
      <Icon icon={fas.faCartShopping} />
      <Icon icon={far.faMoon} />        
    </div>
  )
}

function Icon(prop) {
  return (
    <>
      <label className={style.nav_icon}>
        <FontAwesomeIcon icon={prop.icon} />
      </label>
    </>
  )
}