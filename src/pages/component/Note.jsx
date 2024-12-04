import React from "react";

function Note({ selected = { title: "No Title", date: "No Date", text: "No Content" },SetNote }) {

    function cansel(){
        SetNote();
      }


    return (
        <div className="bg-gray-100 w-full h-full p-6 relative">

            <h1 className="text-xl font-bold mb-2">{selected.title}</h1>
            <p className="text-gray-600 mb-4">{selected.date}</p>
            <p className="text-gray-800">{selected.text}</p>


            <button
                  className="text-red-500 hover:text-red-700 transition duration-300 text-4xl absolute top-6 right-6  "
                 title="Delete Note"
                 onClick={cansel}
                >
                   ✕
            </button>
            
        </div>
    );
}

export default Note;
