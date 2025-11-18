import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoFilters from "./TodoFilters";
import TodoList from "./TodoList";
import { FILTER, SORT_ORDERS } from "../utils/filterConfig";
import { sortArray, toggleFilter } from "../utils/filters";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function TodoApp() {
  //_______________________________________
  const [todos, setTodos] = useLocalStorage("todo", []);
  ///_______________________________________________

  const [filter, setFilter] = useState(FILTER.ALL);
  const [sortOrder, setSortOrder] = useState(SORT_ORDERS.AZ);

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

  const editTask = (id, newText) => {
    setTodos((prev) =>
      prev.map((task) => {
        return task.id === id ? { ...task, title: newText } : task;
      })
    );
  };

  return (
    <>
      <h1>Velkommen</h1>
      <TodoInput onAdd={addTask} />
      <TodoFilters {...{ filter, setFilter, sortOrder, setSortOrder }} />
      <TodoList
        todos={sortArray(toggleFilter(todos, filter), sortOrder)}
        onDelete={deleteTask}
        onToggle={toggleComplete}
        onEdit={editTask}
      />
    </>
  );
}
