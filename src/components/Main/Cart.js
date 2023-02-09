import style from '../../styles/css/Cart.module.css'

// 載入圖片 & SVG
import product_1 from '../../sources/images/product-1.jpg'
import product_2 from '../../sources/images/product-2.jpg'
import {ReactComponent as SvgIconPlus} from '../../sources/icons/plus.svg'
import {ReactComponent as SvgIconMinus} from '../../sources/icons/minus.svg'


// 資料宣告
const datas = [{title: '破壞補丁修身牛仔褲', price: '3,999', img_path: product_1, amount: '1'},
              {title: '刷色直筒牛仔褲', price: '1,299', img_path: product_2, amount: '1'}]

const infos = [{title:'運費', content:'免費'},
              {title:'小計', content:'$5,298'}]

// 購物籃compontents
export default function Cart(){
  return(
    <div id={style.cart_div} className="container">
      <h3 className={style.title}>購物籃</h3>
      <div className={style.item_div}>
        {datas.map(data => <GoodsItem data={data}/>)}
      </div>
      <div className={style.cart_info}>
        {infos.map(info => <CartInfo info={info}/>)}
      </div>
    </div>
  )
}

// 商品資訊 component
function GoodsItem ({data}) {
  return(
    <>
      <span className={style.item}>
        <img className={style.item_img} src={data.img_path} alt={data.title} />
        <span className={style.item_info}>
          <p className={style.item_title}>{data.title}</p>
          <span className={style.item_control}>
            <a className={style.dec_btn} href="#">
              <SvgIconMinus />  
            </a>
            <p className={style.amount}>{data.amount}</p>
            <a className={style.add_btn} href="#">
              <SvgIconPlus />
            </a>
          </span>
        </span>
          <p className={style.item_price}>${data.price}</p>
      </span>
    </>
  )
}

// 購物車資訊 component
function CartInfo ({info}) {
  return(
    <>
      <span className={style.info_item}>
        <p className={style.info_title}>{info.title}</p>
        <p className={style.info_content}>{info.content}</p>
      </span>
    </>
  )
}