import React, { useState } from "react";

function Adder({ setadded, notes, SetNotes }) {
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");

  
  function cancel() {
    setadded();
  }


  function add() {
    if (!title || !date || !text) {
      alert("All fields are required!");
      return;
    }
    const note = { title, date, text };
    SetNotes([...notes, note]);
    setTitle("");
    setDate("");
    setText("");
    setadded();
  }

  return (
    <div className="w-[70%] h-full p-8 bg-gray-200 flex flex-col items-center justify-center rounded-lg shadow-md relative">
      {/* Input Fields */}
      <div className="flex flex-col w-full mb-4">
        <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="input1">
          Title:
        </label>
        <input
          id="input1"
          type="text"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label className="mt-4 mb-2 text-sm font-medium text-gray-700" htmlFor="input2">
          Date:
        </label>
        <input
          id="input2"
          type="date"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Textarea */}
      <div className="flex flex-col w-full mb-4">
        <label className="mb-2 text-sm font-medium text-gray-700" htmlFor="textarea">
          Description:
        </label>
        <textarea
          id="textarea"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter description"
          rows="4"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>

      {/* Buttons */}
      <div className="flex justify-end w-full gap-4">
        <button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
          onClick={cancel}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={add}
        >
          Submit
        </button>
        <button
          className="text-red-500 hover:text-red-700 transition duration-300 text-4xl absolute top-6 right-6"
          title="Delete Note"
          onClick={cancel}
        >
          ✕
        </button>
      </div>
    </div>
  );
}

export default Adder;
