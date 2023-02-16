import { useState } from 'react'

// 載入css stylesheet
import style from 'styles/css/Cart.module.css'

// 載入 SVG
import {ReactComponent as SvgIconPlus} from '../../sources/icons/plus.svg'
import {ReactComponent as SvgIconMinus} from '../../sources/icons/minus.svg'

// 資料宣告
const products = [
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
const convey_info = {title:'運費', content:'免費'}
const total_price = {title:'小計', content: 400}

// 購物籃compontents
export default function Cart(){
  const [product , setProduct] = useState(products)
  const [convey, setConvey] = useState(convey_info)
  const [total, setTotal] = useState(total_price)

  // 減少商品數量
  function handleDecrease (id) {
    let sum = 0 //總金額變數

    // 設定quantity數量
    setProduct( 
      product.map(item => {
        if(item.id === id){
          if(item.quantity > 0){
            let new_auqntity = item.quantity - 1 //暫存修改後的數量
            sum += item.price * new_auqntity //加總總金額
            // id相符 且 數量大於0才減少數量
            return{ ...item, quantity: new_auqntity}
          }
          else{
            sum += item.price * item.quantity
            return{ ...item, quantity: 0 }
          }
        }
        sum += item.price * item.quantity
        return item
      })
    )

    // 設定小計金額
    setTotal({title: '小計', content: sum})
  }

  // 增加商品數量
  function handleIncrease (id){
    let sum = 0 //總金額變數

    // 設定quantity數量
    setProduct(
      product.map(item => {
        if(item.id === id){
          let new_quantity = item.quantity + 1 //暫存修改後的數量
          sum += item.price * new_quantity //加總總金額
          // id相符則增加數量
          return{ ...item, quantity: new_quantity }
        }
        else{
          sum += item.price * item.quantity
          return item
        }
      })
    )

    // 設定小計金額
    setTotal({title: '小計', content: sum})
  }

  return(
    <div id={style.cart_div} className="container">
      <h3 className={style.title}>購物籃</h3>
      <div className={style.item_div}>
        {product.map(data => 
          <GoodsItem 
            key={data.id} 
            data={data} 
            onIncrease={handleIncrease} //將function 傳到子元素
            onDecrease={handleDecrease} //將function 傳到子元素
          />)}
      </div>
      <div className={style.cart_info}>
        <CartInfo info={convey}/> {/* 運送方式 */}
        <CartInfo info={total}/> {/* 小計 */}
      </div>
    </div>
  )
}

// 商品資訊 component
function GoodsItem ({data, onIncrease, onDecrease}) {
  return(
    <>
      <span className={style.item} key={data.id}>
        <img className={style.item_img} src={data.img} alt={data.name} />
        <span className={style.item_info}>
          <p className={style.item_title}>{data.name}</p>
          <span className={style.item_control}>
            <button className={style.dec_btn} onClick={() => {onDecrease(data.id)}}> {/*設定onDecrease()*/}
              <SvgIconMinus />  
            </button>
            <p className={style.amount}>{data.quantity}</p>
            <button className={style.add_btn} onClick={() => {onIncrease(data.id)}}> {/*設定onIncrease()*/}
              <SvgIconPlus />
            </button>
          </span>
        </span>
          <p className={style.item_price}>$ {data.price}</p>
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
        <p className={style.info_content}>{info.content > 0 && '$ '}{info.content}</p>
      </span>
    </>
  )
}