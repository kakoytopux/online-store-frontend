import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: FC<any> = ({ element: Component, ...props }) => {
  const authData = useAppSelector(state => state.auth.value);
  
  return authData ? <Component {...props} /> : <Navigate to='/' />;
}
