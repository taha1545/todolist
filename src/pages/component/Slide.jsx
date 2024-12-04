import React from "react";

function Slide({notes,SetNote,SetNotes,setadded}) {
 
  function show (note){
    SetNote({ title: note.title , date: note.date ,text: note.text });
  }

  function delet(index) {
     const updatedNotes = [...notes];
     updatedNotes.splice(index, 1);
     SetNotes(updatedNotes);  
 }

 function add (){
    setadded(true);
 }

  return (
      <div className="w-full h-full p-[3%]">
          <div className="h-[92%] w-full overflow-y-auto">

              {notes.map((note, index) => (
                  <div key={index} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4">
                      <div>
                          <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                          <p className="text-sm text-gray-500">{note.date}</p>
                      </div>

                      <div className="flex gap-[30%] pr-[5%]">
                          <button
                              className="text-blue-500 hover:text-blue-700 transition duration-300  "
                              title="Get Note"
                              onClick={() => show(note)}
                          >
                              Get
                          </button>
                          <button
                              className="text-red-500 hover:text-red-700 transition duration-300"
                              title="Delete Note"
                              onClick={() => delet(index)}
                          >
                              ✕
                          </button>
                      </div>
                  </div>
              ))}


          </div>
          <button className="w-full rounded-xl bg-blue-600 text-white text-xl h-[8%] hover:bg-blue-800"
         onClick={() => add()}
          >
              Add Note 
          </button>
      </div>
  );
}

export default Slide;
