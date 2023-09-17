import { FC } from 'react';
import { Header } from '../Header/Header';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { setUserNull } from '../../redux/slices/user';
import { setFalse } from '../../redux/slices/auth';
import './Profile.scss';
import { mainApi } from '../../utils/MainApi';

export const Profile: FC = () => {
  const { user } = useAppSelector(state => state.user.value);
  const dispatch = useAppDispatch();

  const exitProfile = () => {
    mainApi.exit()
    .then(() => {
      dispatch(setUserNull());
      dispatch(setFalse());
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <Header search={null} />
    <main className='content'>
      <section className='profile'>
        <div className='profile__container'>
          <form className='profile__form' method='post'>
            <div className='profile__box-field'>
              <label
              className='profile__label'
              htmlFor='name'>Имя</label>
              <input
              type='text'
              name='name'
              id='name'
              className='profile__field'
              value={user?.name || ''}
              disabled />
            </div>
            <div className='profile__box-field'>
              <label
              className='profile__label'
              htmlFor='email'>Email</label>
              <input
              type='text'
              name='email'
              id='email'
              className='profile__field'
              value={user?.email || ''}
              disabled />
            </div>
          </form>
          <button
          type='button'
          className='profile__exit btn'
          onClick={exitProfile}>Выйти</button>
        </div>
      </section>
    </main>
    </>
  );
}
