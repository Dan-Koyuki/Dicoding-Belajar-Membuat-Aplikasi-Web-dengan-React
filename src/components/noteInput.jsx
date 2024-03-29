import React, { useState } from "react";
import { NotesCollection } from "../model/notes.model";

const NoteInput = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isArchived, setArchived] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const note = {
      id: +new Date().toTimeString(),
      title: title,
      body: body,
      archived: isArchived,
      createdAt: +new Date(),
    };

    NotesCollection.push(note)
  };

  const handleTitleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 50) {
      setTitle(inputText);
    }
  };

  return (
    <div className="border border-black p-2 md:p-4">
      <h1 className="my-2 text-lg font-bold">Create Note</h1>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            className="border border-black relative z-0 p-2"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
            rows={2}
            cols={30}
          />
          <span className="absolute text-xs bottom-2 z-10 right-2">
            {title.length}/50
          </span>
        </div>
        <br />
        <textarea
          className="border border-black"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          rows={4}
          cols={30}
        />
        <br />
        <input
          type="checkbox"
          className="border border-black mx-1"
          checked={isArchived}
          onChange={(e) => setArchived(e.target.checked)}
        />
        <label>Archived</label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default NoteInput;
