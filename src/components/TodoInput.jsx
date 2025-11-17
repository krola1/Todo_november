import { useState } from "react";

export default function TodoInput({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} aria-label="Add todo form">
        <label htmlFor="todo-input" className="sr-only">
          Add todo
        </label>
        <input
          id="todo-input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo..."
          title="Enter a todo"
          required
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
