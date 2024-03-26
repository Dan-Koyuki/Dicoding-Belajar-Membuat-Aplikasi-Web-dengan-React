import { useState } from "react";
import "./App.css";

function App() {
  let myNotes = [];
  const [noteTitle, setTitle] = useState("");
  const [noteBody, setBody] = useState("");
  const [isArchived, setArchived] = useState(false);

  const createNote = (title, body, archived) => {
    const note = {
      id: "cssdsa",
      title: title,
      body: body,
      archived: archived,
      createdAt: +new Date(),
    };

    myNotes.push(note);
  };

  return (
    <div className="flex flex-col">
      <div className="sticky border">
        <div className="flex justify-between py-3 px-10">
          <div>
            <p className="text-lg italic">My Notes</p>
          </div>
          <div>
            <a href="https://dan-koyuki-profile.vercel.app">About</a>
          </div>
        </div>
      </div>
      <div className="border">
        <p>Notes Input Div</p>
        <button onClick={() => createNote()} className="border">
          Create
        </button>
      </div>
      <div className="border">
        <p>Actives Notes Div</p>
      </div>
      <div className="border">
        <p>Archive Notes Div</p>
      </div>
    </div>
  );
}

export default App;
