import React from 'react'
interface Props{
  todo:string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
}
export const InputFeild:React.FC<Props> = ({todo,setTodo}:Props) => {
  return (
    <form className='input'>
    <input type='input' placeholder='Enter todo' className='input__box' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button className='input_submit' type='submit'> GO</button>
      
    </form>
  )
}

