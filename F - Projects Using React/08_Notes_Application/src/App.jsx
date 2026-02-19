import { useState } from "react";

const App = () => {
  const [noteHeading, setNoteHeading] = useState("");
  const [noteDetail, setNoteDetail] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ noteHeading, noteDetail });
    setTask(copyTask);

    setNoteHeading("");
    setNoteDetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        className="flex flex-col gap-4 p-10"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        {/* Note heading input field */}
        <input
          name="note-heading"
          type="text"
          placeholder="Enter your note heading"
          className="font-medium border-2 px-5 py-3 rounded outline-none"
          value={noteHeading}
          onChange={(e) => {
            setNoteHeading(e.target.value);
          }}
          required
        />

        {/* Note details input field */}
        <textarea
          name="note-details"
          type="text"
          placeholder="Enter notes here in detail"
          className="h-32 font-medium border-2 px-5 py-3 rounded outline-none"
          value={noteDetail}
          onChange={(e) => {
            setNoteDetail(e.target.value);
          }}
          required
        ></textarea>

        {/* submit button */}
        <button className="bg-white text-black px-5 py-3 text-xl font-bold rounded outline-none active:scale-95 transition cursor-pointer">
          Add Note
        </button>
      </form>

      <div className=" p-10">
        <h1 className="text-3xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start h-50 w-48 rounded bg-white text-black p-2"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.noteHeading}
                  </h3>
                  <p className="leading-tight font-medium text-sm text-gray-600 mt-3">
                    {elem.noteDetail}
                  </p>
                </div>

                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer bg-red-500 py-1 rounded text-white font-bold active:scale-95 transition"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
