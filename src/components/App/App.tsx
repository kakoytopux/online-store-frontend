import React, { FC } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
}
