import React from 'react';
import Home from './Home/Home';
import Courses from './courses/Courses';
import { Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
function App() {
  return (
    <>
      {/* <Home />
      <Course/> */}
       <Routes className="dark:bg-slate-900 dark:text-white">
        <Route path="/" element={<Home />} />
        <Route path='/Course' element={<Courses />} />
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </>
  )
}

export default App