export default function TaskCard({ task, onDelete, onToggle }) {
  const { id, completed, title } = task;
  return (
    <div style={{ border: "solid white" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <h3>{title}</h3>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
}
