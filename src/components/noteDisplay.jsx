import React from "react";
import { NotesCollection } from "../model/notes.model";

const NoteDisplay = () => {
  return (
    <div className="border border-black w-full">
      <div>
        <input type="text" placeholder="search" className="p-2 h-8 w-1/4" />
      </div>
      <div>
        {NotesCollection &&
          NotesCollection.map((note) => (
            <div key={note.id}>
              <p>{note.id}</p>
              <p>{note.title}</p>
              <p>{note.body}</p>
              <p>{note.createdAt}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NoteDisplay;
