import { FC, useEffect } from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { NotFound } from '../NotFound/NotFound';
import { Register } from '../Register/Register';
import { Login } from '../Login/Login';
import { mainApi } from '../../utils/MainApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addUserData, setUserNull } from '../../redux/slices/user';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { Profile } from '../Profile/Profile';
import { setTrue } from '../../redux/slices/auth';

export const App: FC = () => {
  const auth = useAppSelector(state => state.auth.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    mainApi.user()
    .then(res => {
      dispatch(addUserData(res));
      dispatch(setTrue());
    })
    .catch(err => {
      dispatch(setUserNull());
      console.log(err);
    })
  }, [dispatch, auth]);

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
