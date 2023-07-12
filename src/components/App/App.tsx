import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import NotFound from '../NotFound/NotFound';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}
