import { useContext, useState } from 'react'
import { CartContext, TotalContext } from 'components/CartContext.js'


// 載入css stylesheet
import style from 'styles/css/Cart.module.css'

// 載入 SVG
import {ReactComponent as SvgIconPlus} from '../../sources/icons/plus.svg'
import {ReactComponent as SvgIconMinus} from '../../sources/icons/minus.svg'

// 購物籃compontents
export default function Cart(){
  const products = useContext(CartContext)
  const [product, setProduct] = useState(products)

  // 總金額(小計)
  let total_price = useContext(TotalContext)
  const [total, setTotal] = useState(total_price)


  // 增減商品數量
  function handleTotal (id, calc_mark) {
    let sum = 0 //總金額變數

    // 設定quantity數量
    setProduct( 
      product.map(item => {
        // id相符 
        if(item.id === id){
          let new_quantity = item.quantity //暫存修改後total的變數

          if(calc_mark === 'plus'){ //增加
            new_quantity++
            console.log(calc_mark)
          }
          else if(calc_mark === 'minus' && item.quantity > 0){ //減少 且 數量大於0才減少數量
            new_quantity--
            console.log(calc_mark)
          }
          
          sum += item.price * new_quantity //加總總金額
          return{ ...item, quantity: new_quantity}
        }
        sum += item.price * item.quantity
        return item
      })
    )

    setTotal(sum) // 設定小計金額
  }

  return(
    <div id={style.cart_div} className="container">
      <h3 className={style.title}>購物籃</h3>
      <div className={style.item_div}>
        {product.map(data => 
          <CartContext.Provider key={data.id} value={{data, handleTotal}} >
            <GoodsItem />
          </CartContext.Provider>
        )}
      </div>
      <div className={style.cart_info}>
        <CartInfo title='運費' content='免費' /> {/* 運送方式 */}
        <CartInfo title='小計' content={total} /> {/* 小計 */}
      </div>
    </div>
  )
}

// 商品資訊 component
function GoodsItem () {
  const {data, handleTotal} = useContext(CartContext)

  return(
    <>
      <span className={style.item} key={data.id}>
        <img className={style.item_img} src={data.img} alt={data.name} />
        <span className={style.item_info}>
          <p className={style.item_title}>{data.name}</p>
          <span className={style.item_control}>
            <button className={style.dec_btn} onClick={() => {handleTotal(data.id, 'minus')}}> {/*handleTotal(減少)*/}
              <SvgIconMinus />  
            </button>
            <p className={style.amount}>{data.quantity}</p>
            <button className={style.add_btn} onClick={() => {handleTotal(data.id, 'plus')}}> {/*handleTotal(增加)*/}
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
function CartInfo ({title, content}) {
  return(
    <>
      <span className={style.info_item}>
        <p className={style.info_title}>{title}</p>
        <p className={style.info_content}>{content > 0 && '$ '}{content}</p>
      </span>
    </>
  )
}