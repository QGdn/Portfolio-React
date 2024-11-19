import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Contact from './pages/contact';
import Mentions from './pages/mentions';
import Portfolio from './pages/portfolio';
import Services from './pages/services';

function App() {
  return (
    
    <div className='App'>
      <Navbar/>
      <main>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mentions' element={<Mentions/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;