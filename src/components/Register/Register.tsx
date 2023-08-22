import { FC, useState } from 'react';
import './Register.scss';
import { mainApi } from '../../utils/MainApi';
import { Auth } from '../Auth/Auth';

export const Register: FC = () => {
  const [nameField, setNameField] = useState<string>('');
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const changeField = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if(name === 'name') {
      setNameField(value);
    }
    if(name === 'email') {
      setEmailField(value);
    }
    if(name === 'password') {
      setPasswordField(value);
    }
  }
  
  const onSubmit = (evt: any) => {
    evt.preventDefault();

    mainApi.register({
      name: nameField,
      email: emailField,
      password: passwordField,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <Auth submit={onSubmit} form={
      <>
        <div className='auth-form__box'>
          <label htmlFor='name' className='auth-form__label'>Имя</label>
          <input
          type='text'
          id='name'
          className='auth-form__field'
          name='name'
          required
          minLength={2}
          maxLength={30}
          onChange={changeField}
          value={nameField}
          />
        </div>
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
    } submitText='Регистрация' />
  );
}
