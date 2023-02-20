import { createContext } from "react";


export const products = [
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
  }
]

// 總金額(小計)
let total_price = 0
products.forEach(item => {
  total_price += item.price * item.quantity
})

export const CartContext = createContext(products)
export const TotalContext =  createContext(total_price)

