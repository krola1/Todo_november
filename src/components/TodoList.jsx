import TaskCard from "./TaskCard";

export default function TodoList({ todos, ...rest }) {
  return (
    <>
      {todos.map((task) => (
        <TaskCard key={task.id} task={task} {...rest} />
      ))}
    </>
  );
}
