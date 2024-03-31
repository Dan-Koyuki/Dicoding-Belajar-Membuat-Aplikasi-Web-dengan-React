import React, { useState } from "react";
import NoteInput from "./noteInput";
import NoteDisplay from "./noteDisplay";

const Home = () => {
  const [collection, setCollection] = useState([]);

  // Function to add a new note to the collection
  const addNote = (newNote) => {
    setCollection([...collection, newNote]);
  };

  const changeArchive = (targetNote) => {
    const targetIndex = collection.findIndex(
      (note) => note.id === targetNote.id
    );
    const updateNote = {
      ...targetNote,
      archived: !targetNote.archived,
    };
    collection[targetIndex] = updateNote;
    setCollection([...collection]);
  };

  const deleteNote = (targetNote) => {
    const newNotesCollection = collection.filter((note) => note.id !== targetNote.id);
    setCollection(newNotesCollection);
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 overflow-x-hidden">
      <p className="text-xl font-bold">My Notes</p>
      <NoteInput addNote={addNote} />
      <NoteDisplay collection={collection} updateNote={changeArchive} deleteNote={deleteNote} />
    </div>
  );
};

export default Home;
