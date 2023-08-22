import { FC } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute: FC<any> = ({ element: Component, ...props }) => {
  const user = useAppSelector(state => state.user.value);
  const auth = useAppSelector(state => state.auth.value);
  
  return user || auth ? <Component {...props} /> : <Navigate to='/' />;
}
