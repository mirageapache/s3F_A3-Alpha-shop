import { createContext } from "react";

// data
export const FormData = [
  { 
    id: '0',
    span: 'owner_span', 
    name: 'owner',
    value: '', 
    type: 'text',  
    title: '持卡人姓名', 
    placeholder: 'John Doe'
  },
  {
    id: '1',
    span: 'card_number_span',
    name: 'card_number', 
    value: '', 
    type: 'text',  
    title: '卡號', 
    placeholder: '1111 2222 3333 4444'
  },
  {
    id: '2',
    span: 'dateline_span', 
    name: 'dateline', 
    value: '', 
    type: 'text',  
    title: '有效期限', 
    placeholder: 'MM/YY'
  },
  {
    id: '3',
    span: 'verify_code_span', 
    name: 'verify_code', 
    value: 0, 
    type: 'number',  
    title: 'CVC / CCV', 
    placeholder: '123'
  }
]

export const FormContext = createContext(FormData)