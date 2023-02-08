import style from '../../styles/css/StepThree.module.css'

// data
let item = [
  {span: 'owner_span', 
    name: 'owner', 
    type: 'text',  
    title: '持卡人姓名', 
    placeholder: 'John Doe'},
  {span: 'card_number_span',
    name: 'card_number', 
    type: 'number',  
    title: '卡號', 
    placeholder: '1111 2222 3333 4444'},
  {span: 'dateline_span', 
    name: 'dateline', 
    type: 'text',  
    title: '有效期限', 
    placeholder: 'MM/YY'},
  {span: 'verify_code_span', 
    name: 'verify_code', 
    type: 'number',  
    title: 'CVC / CCV', 
    placeholder: '123'}
]

// form panel compontent
export default function StepThree(){
  return(
    <div id="step_three" className="container">
      <h1 className={style.title}>付款資訊</h1>
      <form className={style.form_panel}>
        <div className={style.form_div}>
          <InputItem item={item[0]} />
          <InputItem item={item[1]} />
          <InputItem item={item[2]} />
          <InputItem item={item[3]} />
        </div>
      </form>
    </div>
  )
}

// form item compontent
function InputItem ({item}) {
  return(
    <>
      <span id={item.span} className={style.form_item}>
        <label for={item.id}>
          <p>{item.title}</p>
        </label>
        <input id={item.id} type={item.type} name={item.name} placeholder={item.placeholder} />
      </span>
    </>
  )
}