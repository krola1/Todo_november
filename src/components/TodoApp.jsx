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
  const deleteTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  return (
    <>
      <h1>Velkommen</h1>
      <TodoInput onAdd={addTask} />
      <TodoFilters />
      <TodoList todos={todos} onDelete={deleteTask} onToggle={toggleComplete} />
    </>
  );
}
