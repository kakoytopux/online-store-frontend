import React, { FC } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
