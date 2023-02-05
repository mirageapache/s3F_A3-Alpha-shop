import style from './StepTwo.module.css'

const item = [
  {type: '標準運送', des: '約3~7個工作天', price: '免費', checked: true},
  {type: 'DHL貨運', des: '48小時內送達', price: '$500', checked: false}
]

export default function StepTwo(){
  return(
    <div id="step_two" className="container">
      <h1 className={style.title}>運送方式</h1>
      <form className={style.form_panel}>
        <div className={style.form_div}>
          <RadioItem Item = {item[0]} />
          <RadioItem Item = {item[1]} />
        </div>
      </form>
    </div>
  )
}


function RadioItem({Item}) {
  return(
    <label for={Item.id} className={style.form_item}>
      <input id={Item.id} type="radio" name="convey" checked={Item.checked}/>
      <div>
        <p>{Item.type}</p>
        <p>{Item.des}</p>
      </div>
      <span>
        {Item.price}
      </span>
    </label>
  )
}