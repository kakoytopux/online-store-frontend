import React, { FC, useState } from 'react';
import './Register.scss';
import { Header } from '../Header/Header';
import { mainApi } from '../../utils/MainApi';

export const Register: FC = () => {
  const [focus, setFocus] = useState<string[]>([]);
  const [showPass, setShowPass] = useState<boolean>(false);
  const [nameField, setNameField] = useState<string>('');
  const [surnameField, setSurnameField] = useState<string>('');
  const [emailField, setEmailField] = useState<string>('');
  const [passwordField, setPasswordField] = useState<string>('');

  const onFocus = (evt: any) => {
    setFocus([...focus, evt.target.name]);
  }
  const onBlur = (evt: any) => {
    if(!evt.target.value.length) {
      setFocus(focus.filter(i => i !== evt.target.name));
    }
  }
  const findFocusItem = (name: string) => {
    return focus.find(item => item === name);
  }
  const changeShowPass = () => {
    setShowPass(!showPass);
  }
  const changeField = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;

    if(name === 'name') {
      setNameField(value);
    }
    if(name === 'surname') {
      setSurnameField(value);
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
      surname: surnameField,
      email: emailField,
      password: passwordField,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <>
      <Header />
      <main className='content'>
        <section className='register'>
          <form method='post' className='auth-form' onSubmit={onSubmit}>
            <div className='auth-form__container'>
              <div className='auth-form__box'>
                <label htmlFor='name' className={`auth-form__label ${findFocusItem('name') ? 'auth-form__label_active' : ''}`}>Имя</label>
                <input
                type='text'
                id='name'
                className='auth-form__field'
                name='name'
                required
                minLength={2}
                maxLength={30}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={changeField}
                value={nameField}
                />
              </div>
              <div className='auth-form__box'>
                <label htmlFor='surname' className={`auth-form__label ${findFocusItem('surname') ? 'auth-form__label_active' : ''}`}>Фамилия</label>
                <input
                type='text'
                id='surname'
                className='auth-form__field'
                name='surname'
                required
                minLength={2}
                maxLength={30}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={changeField}
                value={surnameField}
                />
              </div>
              <div className='auth-form__box'>
                <label htmlFor='email' className={`auth-form__label ${findFocusItem('email') ? 'auth-form__label_active' : ''}`}>E-mail</label>
                <input
                type='email'
                id='email'
                className='auth-form__field'
                name='email'
                required
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={changeField}
                value={emailField}
                />
              </div>
              <div className='auth-form__box'>
                <label htmlFor='password' className={`auth-form__label ${findFocusItem('password') ? 'auth-form__label_active' : ''}`}>Пароль</label>
                <input
                type={showPass ? 'text' : 'password'}
                id='password'
                className='auth-form__field'
                name='password'
                required
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={changeField}
                value={passwordField}
                />
                <div className='auth-form__box-eye-btn'>
                  <button type='button' className={`auth-form__eye ${showPass ? 'auth-form__eye_show' : ''}`} onClick={changeShowPass}></button>
                </div>
              </div>
              <button type='submit' className='auth-form__submit'>Регистрация</button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
