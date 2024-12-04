import React, { useState } from "react";

function Search({ notes, SetNotes }) {

    const [word, setword] = useState();

    function filter() {
        const filteredNotes = notes.filter((note) =>
            note.title.includes(word) 
        );
        SetNotes(filteredNotes);
    }

    return (
        <div className="w-full h-[10%] flex items-center justify-center bg-gray-100 px-[5%] mt-[2%]">
            <input
                value={word}
                onChange={(e) => setword(e.target.value)}
                type="text"
                placeholder="Search here ..."
                className="w-3/4 max-w-lg px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
                className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition duration-300"
                onClick={()=>filter()}
            >
                Search
            </button>
        </div>
    );
}

export default Search;
