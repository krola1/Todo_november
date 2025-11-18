import { useState } from "react";
export default function TaskCard({ task, onDelete, onToggle, onEdit }) {
  const { id, completed, title, createdAt } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(title);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim()) {
      onEdit(id, newText);
      setNewText("");
      setIsEditing(!isEditing);
    }
  };

  if (isEditing) {
    return (
      <div style={{ border: "solid white" }}>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(e) => setNewText(e.target.value)}
            value={newText ? newText : setNewText(title)}
            type="text"
          />
          <button>Save</button>
          <button
            onClick={() => {
              setIsEditing(!isEditing);
              setNewText("");
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ border: "solid white" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggle(id)}
      />
      <p>{new Date(createdAt).toLocaleString()}</p>
      <h3 onClick={() => setIsEditing(!isEditing)}>{title}</h3>
      <button onClick={() => onDelete(id)}>delete</button>
    </div>
  );
}
