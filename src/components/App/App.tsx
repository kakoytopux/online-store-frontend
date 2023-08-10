import { FC, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { mainApi } from '../../utils/MainApi';
import { useAppDispatch } from '../../redux/hooks';
import { addUserData } from '../../redux/slices/user';
import { setFalse } from '../../redux/slices/auth';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { Profile } from '../Profile/Profile';

export const App: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    mainApi.user
    .then(res => dispatch(addUserData(res)))
    .catch(err => {
      dispatch(setFalse());
      console.log(err);
    })
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<ProtectedRoute element={Profile} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
