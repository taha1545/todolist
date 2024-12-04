import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import Nav from './Nav.jsx'

function App() {
  return (
     <div className='flex h-svh bg-slate-200 flex-col'>

    <Nav/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
    </Routes>
      
    </div>
  );
}

export default App;
