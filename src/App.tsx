import React, { useState } from "react";
import "./App.css";
import {InputField} from "./cmps/input-field";
import {Todolist} from "./cmps/todo-list";
import { Todo } from "./model";

export const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<Todo>>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  
  return (
      <div className="App">
        <span className="heading">Todos</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <Todolist
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
  );
};

