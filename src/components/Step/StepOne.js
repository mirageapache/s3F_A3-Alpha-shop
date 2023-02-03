import style from './StepOne.module.css'

export default function StepOne(){
  return(
    <div id="step_one" className="container">
      <h1 className={style.title}>寄送地址</h1>
      <form className={style.form_panel}>
        <div className={style.form_div}>
          {/* 稱謂 */}
          <span id={style.gender_span} className={style.form_item}>
            <label form='gender_input'>
              <p>稱謂</p>
            </label>
            <select id='gender_input' name="gender">
              <option>先生</option>
              <option>小姐</option>
            </select>
          </span>
          
          {/* 姓名 */}
          <span id={style.name_span} className={style.form_item}>
            <label for="name_input">
              <p>姓名</p>
            </label>
            <input id='name_input' type="text" name="name" placeholder='請輸入姓名' />
          </span>

          {/* 電話 */}
          <span id={style.phone_span} className={style.form_item}>
            <label for="phone_input">
              <p>電話</p>
            </label>
            <input id='phone_input' type="number" name="phone" placeholder='請輸入行動電話' />
          </span>
        
          {/* email */}
          <span id={style.email_span} className={style.form_item}>
            <label for="email_input">
              <p>Email</p>
            </label>
            <input id='email_input' type="email" name="email" placeholder='請輸入電子郵件' />
          </span>

          {/* 縣市 */}
          <span id={style.city_span} className={style.form_item}>
            <label form='city_input'>
              <p>縣市</p>
            </label>
            <select id='city_input' name="city">
              <option>請選擇縣市</option>
              <option>台北市</option>
            </select>
          </span>

          {/* 地址 */}
          <span id={style.address_span} className={style.form_item}>
            <label for="address_input">
              <p>地址</p>
            </label>
            <input id='address_input' type="text" name="address" placeholder='請輸入地址' />
          </span>

        </div>
      </form>
    </div>
  )
}