import React from 'react';
import './App.css';
import Overview from './Views/overview';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import View_a from './Views/view_a';
import View_b from './Views/view_b';
import View_c from './Views/view_c';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path='/' Component={Overview}/>
    <Route path='/view_a' Component={View_a}/>
    <Route path='/view_b' Component={View_b}/>
    <Route path='/view_c' Component={View_c}/>
    
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
