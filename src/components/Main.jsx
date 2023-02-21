import { useState } from 'react';
import StepProcess from './Main/StepProcess/StepProcess';
import StepOne from './Main/Step/StepOne';
import StepTwo from './Main/Step/StepTwo';
import StepThree from './Main/Step/StepThree';
import ProcessControl from './Main/ProcessControl/ProcessControl';
import Cart from './Main/Cart'

import style from 'styles/css/main.module.css';
import { FormContext, FormData } from './FormContext.js';
import { CartContext, products, total_price } from './CartContext';

const current_index = 1

export default function App() {
  // Step index (結帳流程)
  const [index, setIndex] = useState(current_index)
  // step three表單資料
  const [form_data, setInput] = useState(FormData)
  // Cart 購物車資料
  const [product, setProduct] = useState(products)
  // Cart 總金額
  const [total, setTotal] = useState(total_price)

  function handleSetPage(new_index) {
    setIndex(new_index)
  }

  return (
    <div className={style.main_banner}>
      <div className={style.main_content}>
        {/* 設定FormContext Provider 資料 */}
        <FormContext.Provider value={[form_data, setInput]}>
          <section className={style.process_section}>
            <StepProcess page_index={index}/>
            {index === 1 && <StepOne />}
            {index === 2 && <StepTwo />}
            {index === 3 && <StepThree />}
          </section>
          
          {/* 設定CartContext Provider 資料 */}
          <CartContext.Provider value={[product, setProduct, total, setTotal]}>
            <section className={style.cart_section}>
              <Cart />
            </section>
            <section className={style.control_section}>
              <ProcessControl page_index={index} onClick={handleSetPage}/>
            </section>
          </CartContext.Provider>
        </FormContext.Provider>
      </div>
    </div>
  );
}

