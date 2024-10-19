import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import React, { useState } from "react";

type CreateAreaProps = {
  onAdd: (note: { title: string; content: string }) => void;
};

function CreateArea({ onAdd }: CreateAreaProps) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event: React.ChangeEvent) {
    const { name, value } = event.target as HTMLInputElement;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event: React.FormEvent) {
    if (note.title === "" || note.content === "") {
      return;
    }
    onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <form className="relative flex flex-col gap-4 rounded-lg my-4 w-[480px] p-4 bg-white shadow-xl ">
          <div className="flex flex-col gap-2 mb-5">
            <input
              className="text-xl py-1 px-2 focus:outline-none"
              type="text"
              name="title"
              value={note.title}
              placeholder="Title"
              onChange={handleChange}
              required
            />
            <textarea
              className="text-lg py-1 px-2 focus:outline-none"
              name="content"
              value={note.content}
              placeholder="Add task here"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Fab
              className="bg-amber-500 px-3 py-3 text-white absolute right-4 rounded-full bottom-[-18px]"
              onClick={submitNote}
            >
              <AddIcon />
            </Fab>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateArea;
