export default function TaskCard({ task, onDelete, onToggle }) {
  const { id, completed, title, createdAt } = task;
  return (
    <div style={{ border: "solid white" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <p>{new Date(createdAt).toLocaleString()}</p>
      <h3>{title}</h3>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
}
