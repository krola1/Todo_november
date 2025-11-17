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
      <form action="" onSubmit={handleSubmit}>
        <input
          value={text}
          type="text"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}
