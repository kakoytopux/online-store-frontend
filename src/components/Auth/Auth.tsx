import { FC, useEffect } from 'react';
import './Auth.scss';
import { Header } from '../Header/Header';
import { useAppSelector } from '../../redux/hooks';
import { useNavigate } from 'react-router-dom';

interface Props {
  form: any,
  submit: any,
  submitText: string,
}

export const Auth: FC<Props> = ({ form, submit, submitText }) => {
  const auth = useAppSelector(state => state.auth.value);
  const navigate = useNavigate();

  useEffect(() => {
    if(auth) {
      navigate('/');
    }
  }, [auth, navigate]);

  return (
    <>
    <Header />
    <main className='content'>
      <section className='auth'>
        <form method='post' className='auth-form' onSubmit={submit}>
          <div className='auth-form__container'>
            {form}
            <button type='submit' className='auth-form__submit'>{submitText}</button>
          </div>
        </form>
      </section>
    </main>
    </>
  );
}
