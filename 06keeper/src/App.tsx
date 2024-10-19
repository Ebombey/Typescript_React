import { useState } from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import Footer from "./components/Footer";

type Note = {
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  function addNote(note: Note) {
    setNotes((prevNotes) => [...prevNotes, note]);
  }

  function deleteNote(id: number) {
    setNotes((prevNotes) =>
      prevNotes.filter((index) => index !== prevNotes[id])
    );
  }

  return (
    <>
      <div className="bg-[#e0e0e0] w-full h-screen">
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
