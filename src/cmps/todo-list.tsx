import { Todo } from "../model"
import { TodoPrev } from "./todo-prev";

interface props{
  todos:Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}


export const Todolist:React.FC<props>=({todos,setTodos}:props)=>{
  return <div className='todos'>
    {todos.map(todo=><li><TodoPrev index={todo.id} todo={todo}todos={todos} setTodos={setTodos}/></li>)}
  </div>
}