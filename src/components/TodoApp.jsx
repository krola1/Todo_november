import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  const createTask = (text) => {
    return {
      id: crypto.randomUUID(),
      title: text,
      completed: false,
      createdAt: Date.now(),
    };
  };

  const addTask = (text) => {
    setTodos((prev) => [...prev, createTask(text)]);
  };

  return (
    <>
      <h1>Velkommen</h1>
      <TodoInput onAdd={addTask} />
      <TodoFilters />
      <TodoList todos={todos} />
    </>
  );
}
