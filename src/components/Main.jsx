import StepProcess from './Main/StepProcess/StepProcess';
import StepOne from './Main/Step/StepOne';
import StepTwo from './Main/Step/StepTwo';
import StepThree from './Main/Step/StepThree';
import ProcessControl from './Main/ProcessControl/ProcessControl';
import Cart from './Main/Cart'

import style from '../styles/css/main.module.css';

export default function App() {
  return (
    <div className={style.main_banner}>
      <div className={style.main_content}>
        <section className={style.process_section}>
          <StepProcess />
          <StepOne />
          {/* <StepTwo /> */}
          {/* <StepThree /> */}
        </section>
        <section className={style.cart_section}>
          <Cart />
        </section>
        <section className={style.control_section}>
          <ProcessControl />
        </section>
      </div>
    </div>
  );
}

