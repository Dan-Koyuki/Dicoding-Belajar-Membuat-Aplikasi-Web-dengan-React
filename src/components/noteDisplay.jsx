import React, { useEffect, useState } from "react";

const NoteDisplay = ({ collection, updateNote, deleteNote }) => {
  const [filter, setFilter] = useState("");
  const [filteredCollection, setFilteredCollection] = useState([]);

  const showFormattedDate = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date).toLocaleDateString("id-ID", options);
  };

  useEffect(() => {
    const filteredNotes = collection.filter((note) =>
      note.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredCollection(filteredNotes);
  }, [filter, collection]);

  return (
    <div className="w-full">
      <div>
        <input
          type="text"
          placeholder="search"
          className="p-2 h-8 md:w-1/4"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {filteredCollection && filteredCollection.length !== 0 ? (
        <div>
          <div className="flex flex-col items-center justify-center">
            <p className="my-3 font-bold text-lg border-b-4 border-black">
              Notes
            </p>
            <div className="flex flex-wrap justify-center items-center md:gap-4">
              {filteredCollection.map((note) =>
                note.archived ? null : (
                  <div
                    key={note.id}
                    className="border border-black rounded-md p-2 bg-slate-300 w-60 text-wrap"
                  >
                    <p>{note.id}</p>
                    <p className="max-w-full underline">{note.title}</p>
                    <p className="max-w-full">{note.body}</p>
                    <p>{showFormattedDate(note.createdAt)}</p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="border border-red-700 p-1 bg-red-500 rounded-md"
                        onClick={() => deleteNote(note)}
                      >
                        Delete
                      </button>
                      <button
                        className="border border-blue-700 p-1 bg-blue-500 rounded-md"
                        onClick={() => updateNote(note)}
                      >
                        Archive
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="my-3 font-bold text-lg border-b-4 border-black">
              Archived Notes
            </p>
            <div className="flex flex-wrap justify-center items-center md:gap-4">
              {filteredCollection.map((note) =>
                note.archived ? (
                  <div
                    key={note.id}
                    className="border border-black rounded-md p-2 bg-slate-300 w-60 text-wrap"
                  >
                    <p>{note.id}</p>
                    <p className="max-w-full">{note.title}</p>
                    <p className="max-w-full">{note.body}</p>
                    <p>{showFormattedDate(note.createdAt)}</p>
                    <div className="flex gap-4 justify-center">
                      <button
                        className="border border-red-700 p-1 bg-red-500 rounded-md"
                        onClick={() => deleteNote(note)}
                      >
                        Delete
                      </button>
                      <button
                        className="border border-blue-700 p-1 bg-blue-500 rounded-md"
                        onClick={() => updateNote(note)}
                      >
                        Unarchive
                      </button>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Nothing to display. Start jotting down your thoughts and ideas!</p>
        </div>
      )}
    </div>
  );
};

export default NoteDisplay;
