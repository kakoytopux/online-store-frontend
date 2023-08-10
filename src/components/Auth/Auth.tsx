import { FC } from 'react';
import './Auth.scss';
import { Header } from '../Header/Header';

interface Props {
  form: any,
  submit: any,
  submitText: string,
}

export const Auth: FC<Props> = ({ form, submit, submitText }) => {
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
