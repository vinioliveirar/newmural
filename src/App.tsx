import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Home from './home/home';
import Materia from './materia/Materia';
import Contato from './Contato/Contato';
import Sobre from './Sobre/Sobre';
import Login from './Login/Login';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/materia' element={<Materia />} />
          <Route path='/contato' element={<Contato />} />
          <Route path='/sobre' element={<Sobre />} />
          <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
