import React, { useState } from 'react';
import './App.css';
import { InputFeild } from './cmps/input-feild';

const App:React.FC=()=> {
  const[todo,setTodo]=useState<string>("")
  console.log(todo)
  return (
    <div className="App">
      <span className='heading'>TODOS...</span>
      <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
