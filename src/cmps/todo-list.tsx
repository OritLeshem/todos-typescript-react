import React from "react";
import { Todo } from "../model";
import {TodoPrev} from "./todo-prev";

interface props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
  completedTodos: Array<Todo>;
}

export const Todolist: React.FC<props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
        
          <div className={`todos`}>

       {todos.length? <span className="todos__heading"> Tasks</span>:<span className="todos__heading"> No tasks yet</span>}
            {todos?.map((todo, index) => (
              <TodoPrev
                index={index}
                todos={todos}
                todo={todo}
                key={todo.id}
                setTodos={setTodos}
              />
            ))}
           
          </div>
        
         
  )
}

