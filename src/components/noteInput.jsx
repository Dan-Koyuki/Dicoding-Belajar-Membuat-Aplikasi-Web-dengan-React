import React, { useState } from "react";

const NoteInput = ({addNote}) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isArchived, setArchived] = useState(false);
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (title === "") {
        setTitleError("Title can't be empty");
        throw new Error("Title empty!");
      } else {
        setTitleError("");
      }

      if (body === "") {
        setBodyError("Body can't be empty");
        throw new Error("Body empty!");
      } else {
        setBodyError("");
      }
      
      const note = {
        id: +new Date(),
        title: title,
        body: body,
        archived: isArchived,
        createdAt: new Date().toISOString(),
      };
      addNote(note);
    } catch (error) {
      console.log(error);
    } finally {
      setTitle("");
      setBody("");
      setArchived(false);
    }
  };

  const handleTitleChange = (e) => {
    const inputText = e.target.value;
    if (inputText.length <= 50) {
      setTitle(inputText);
    }
  };

  return (
    <div className="flex flex-col p-2 w-full  border-b-8 mb-2 border-double border-black md:p-4 md:w-1/2">
      <h1 className="my-2 text-lg font-bold">Create Note</h1>
      <form id="createNote" onSubmit={handleSubmit}>
        <div className="relative">
          <textarea
            id="noteTitle"
            className="border border-black relative z-0 p-2 w-full md:w-3/4 h-12"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
          />
          <span className="absolute text-xs bottom-2 z-10 right-2 md:right-24">
            {title.length}/50
          </span>
        </div>
        {titleError && <p className="text-red-500">{titleError}</p>}
        <textarea
          id="noteBody"
          className="border border-black p-2 w-full h-28 md:w-3/4 md:h-20"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        {bodyError && <p className="text-red-500">{bodyError}</p>}
        <br />
        <div className="flex justify-center items-center my-2">
          <input
            id="noteCondition"
            type="checkbox"
            className="border border-black mx-1 w-4 h-4"
            checked={isArchived}
            onChange={(e) => setArchived(e.target.checked)}
          />
          <label htmlFor="noteCondition">Archived</label>
        </div>
        <button
          type="submit"
          className="border border-teal-400 p-2 rounded-lg bg-teal-400 font-semibold self-center"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
