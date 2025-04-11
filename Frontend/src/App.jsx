import React from 'react';
import Home from './Home/Home';
import Courses from './courses/Courses';
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from './components/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';
function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/* <Home />
      <Course/> */}
       <Routes className="dark:bg-slate-900 dark:text-white">
        <Route path="/" element={<Home />} />
        <Route path='/Course' element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
       <Toaster />
    </>
  )
}

export default App