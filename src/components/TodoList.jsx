import TaskCard from "./TaskCard";

export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </>
  );
}
