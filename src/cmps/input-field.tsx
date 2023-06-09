import React, { useRef } from "react";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur();

      }}
    >
      <input
        type="text"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="input__box"
        ref={inputRef}

      />
      <button type="submit" className="input_submit">
        GO
      </button>
    </form>
  );
};

