import style from '../../../styles/css/StepOne.module.css'

const citys = [{name: '請選擇縣市', value: ''},{name: '基隆市', value: 'KLU'},{name: '新北市', value: 'TPH'},
              {name: '臺北市', value: 'TPE'},{name: '桃園市', value: 'TYC'},{name: '新竹縣', value: 'HSH'},
              {name: '新竹市', value: 'HSC'},{name: '苗栗市', value: 'MAC'},{name: '苗栗縣', value: 'MAL'},
              {name: '臺中市', value: 'TXG'},{name: '彰化縣', value: 'CWH'},{name: '彰化市', value: 'CWS'},
              {name: '南投市', value: 'NTC'},{name: '南投縣', value: 'NTO'},{name: '雲林縣', value: 'YLH'},
              {name: '嘉義縣', value: 'CHY'},{name: '嘉義市', value: 'CYI'},{name: '臺南市', value: 'TNN'},
              {name: '高雄市', value: 'KHH'},{name: '屏東縣', value: 'IUH'},{name: '屏東市', value: 'PTS'},
              {name: '宜蘭縣', value: 'ILN'},{name: '宜蘭市', value: 'ILC'},{name: '花蓮縣', value: 'HWA'},
              {name: '花蓮市', value: 'HWC'},{name: '臺東市', value: 'TTC'},{name: '臺東縣', value: 'TTT'},
              {name: '澎湖縣', value: 'PEH'},{name: '金門縣', value: 'KMN'},{name: '連江縣', value: 'LNN'}]

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
              {citys.map(city => <option value={city.value}>{city.name}</option>)}
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