import React, { useState } from 'react';

import Search from './component/Search';
import Slide from './component/Slide';
import Note from './component/Note';
import Adder from './component/Adder';

function Home() {
 
  const [notes,SetNotes] = useState([
    { title: "Examen SE", date: "16-12-2024", text: "u should revise syncronation chapitre" },
    { title: "Examen BDD", date: "18-12-2024",text: "u should revise pl-sql chapitre" },
    { title: "Examen Network", date: "20-12-2024",text: "u should revise dns chapitre" },
   ]);  
   
   const [searchnotes,setsearchnotes] = useState();  

   const [selected,Setselected]=useState();

   const [added,setadded]=useState();


  return(
    <div className='w-full h-screen flex fex-row'>

           <div className='w-[30%] h-full flex flex-col bg-gray-100  '>
               <Search notes={notes} SetNotes={setsearchnotes}/>
               {searchnotes ? (
                  <Slide
                   notes={searchnotes}
                 SetNote={Setselected}
                SetNotes={SetNotes}
                setadded={setadded}
                 />
                         ) : (
                <Slide
                 notes={notes}
                 SetNote={Setselected}
                 SetNotes={SetNotes}
                 setadded={setadded}
                 />
             ) }
           </div>
           
           
           <div
           className="w-[70%] h-full flex-col p-[3%] bg-gray-200 flex ">  
           {
            selected ? <Note selected={selected} SetNote={Setselected}/>
            :(
              <div className="text-center text-gray-500 h-full w-full flex flex-col items-center justify-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium">No note selected</h3>
                <p className="mt-1 text-sm text-gray-500">Select a note to view its details</p>
              </div>
            )
           }      
           </div>
          
          {
            added ? (<Adder setadded={setadded} notes={notes} SetNotes={SetNotes}/>) : ""
          }
          
    </div>
  );
}

export default Home;
