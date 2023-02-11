import style from '../../styles/css/Cart.module.css'

// 載入 SVG
import {ReactComponent as SvgIconPlus} from '../../sources/icons/plus.svg'
import {ReactComponent as SvgIconMinus} from '../../sources/icons/minus.svg'

// 資料宣告
const datas = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1
  },
]


const infos = [{title:'運費', content:'免費'}, {title:'小計', content:'$5,298'}]

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
      <span className={style.item} key={data.id}>
        <img className={style.item_img} src={data.img} alt={data.name} />
        <span className={style.item_info}>
          <p className={style.item_title}>{data.name}</p>
          <span className={style.item_control}>
            <a className={style.dec_btn} href="#">
              <SvgIconMinus />  
            </a>
            <p className={style.amount}>{data.quantity}</p>
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