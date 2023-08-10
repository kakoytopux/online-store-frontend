import { FC, useState } from 'react';
import './Login.scss';
import { mainApi } from '../../utils/MainApi';
import { Auth } from '../Auth/Auth';
import { setTrue } from '../../redux/slices/auth';
import { useAppDispatch } from '../../redux/hooks';

export const Login: FC = () => {
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');
  const dispatch = useAppDispatch();

  const changeField = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if(name === 'email') {
      setEmailField(value);
    }
    if(name === 'password') {
      setPasswordField(value);
    }
  }
  
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    mainApi.login({
      email: emailField,
      password: passwordField,
    })
    .then(res => {
      dispatch(setTrue());
      console.log(res);
    })
    .catch(err => console.log(err))
  }

  return (
    <Auth submit={onSubmit} form={
      <>
        <div className='auth-form__box'>
          <label htmlFor='email' className='auth-form__label'>E-mail</label>
          <input
          type='email'
          id='email'
          className='auth-form__field'
          name='email'
          required
          onChange={changeField}
          value={emailField}
          />
        </div>
        <div className='auth-form__box'>
          <label htmlFor='password' className='auth-form__label'>Пароль</label>
          <input
          type='password'
          id='password'
          className='auth-form__field'
          name='password'
          required
          onChange={changeField}
          value={passwordField}
          />
        </div>
      </>
    } submitText='Авторизация' />
  );
}
