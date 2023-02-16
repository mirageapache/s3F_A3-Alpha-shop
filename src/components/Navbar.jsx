import { ReactComponent as SvgIconLogo } from "../sources/icons/logo.svg";
import { ReactComponent as SvgIconToggle } from "../sources/icons/toggle.svg";
import { ReactComponent as SvgIconSearch } from "../sources/icons/search.svg";
import { ReactComponent as SvgIconCart } from "../sources/icons/cart.svg";
import { ReactComponent as SvgIconMoon } from "../sources/icons/moon.svg";
import { ReactComponent as SvgIconSun } from "../sources/icons/sun.svg";

import style from 'styles/css/Navbar.module.css'

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
      <div className={style.navbar_content}>
        <NavItem items={items}/>
        <NavBrand />
        <NavIcon />
      </div>
    </div>
  )
}

// Item (左側)區塊
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
        <button className={style.toggle_btn}>
          <SvgIconToggle />
        </button>
        {NavItems}
      </ul>
    </div>
  )
}

// Logo (中間)區塊
function NavBrand() {
  return (
    <div className={style.brand}>
      <a href="/">
        <SvgIconLogo />
      </a>
    </div>
  )
}

// Icon (右側)區塊
function NavIcon() {
  return (
    <div className={style.icon_div}>
      <a className={style.search_icon} href="#">
        <SvgIconSearch />
      </a>
      <a className={style.dark_icon} href="#">
        <SvgIconMoon />
      </a>
      <a className={style.light_icon} href="#">
        <SvgIconSun />
      </a>
      <a className={style.cart_icon} href="#">
        <SvgIconCart />
      </a>
    </div>
  )
}

