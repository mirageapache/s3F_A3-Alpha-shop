import { useState } from 'react';
import StepProcess from './Main/StepProcess/StepProcess';
import StepOne from './Main/Step/StepOne';
import StepTwo from './Main/Step/StepTwo';
import StepThree from './Main/Step/StepThree';
import ProcessControl from './Main/ProcessControl/ProcessControl';
import Cart from './Main/Cart'

import style from 'styles/css/main.module.css';

const current_index = 1

export default function App() {
  const [index, setIndex] = useState(current_index)

  function handleSetPage(new_index) {
    setIndex(new_index)
  }

  return (
    <div className={style.main_banner}>
      <div className={style.main_content}>
        <section className={style.process_section}>
          <StepProcess page_index={index}/>
          {index === 1 && <StepOne />}
          {index === 2 && <StepTwo />}
          {index === 3 && <StepThree />}
        </section>
        <section className={style.cart_section}>
          <Cart />
        </section>
        <section className={style.control_section}>
          <ProcessControl page_index={index} onClick={handleSetPage}/>
        </section>
      </div>
    </div>
  );
}

