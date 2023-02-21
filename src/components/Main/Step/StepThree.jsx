import style from 'styles/css/StepThree.module.css'
import { useContext } from 'react'
import { FormContext } from 'components/FormContext.js'

// form panel compontent
export default function StepThree(){
  // 透過useContext 取的資料
  const [form_data, setInput] = useContext(FormContext)
    
  function handleInput(id, new_value) {
    // 更新input value
    const new_data = form_data.map(data => {
        if(id === data.id){
          return{...data, value: new_value}
        }
        return data
      })
    setInput(new_data)
  }

  return(
    <div id="step_three" className="container">
      <h1 className={style.title}>付款資訊</h1>
      <form className={style.form_panel}>
        <div className={style.form_div}>
          {form_data.map(data => 
            <FormContext.Provider key={data.id} value={{data, handleInput}}>
              <InputItem />
            </FormContext.Provider>
          )}
        </div>
      </form>
    </div>
  )
}

// form item compontent
function InputItem () {
  const {data, handleInput} = useContext(FormContext)

  return(
    <>
      <span id={data.span} className={style.form_item}>
        <label htmlFor={data.id}>
          <p>{data.title}</p>
        </label>
        <input 
          id={data.id} 
          value={data.value}
          onChange={(e) => {handleInput(data.id, e.target.value)}} 
          type={data.type} 
          name={data.name} 
          placeholder={data.placeholder} />
      </span>
    </>
  )
 

}