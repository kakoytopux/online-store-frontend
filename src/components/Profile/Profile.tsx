import { FC } from 'react';
import { Header } from '../Header/Header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import './Profile.scss';

export const Profile: FC = () => {
  const { user } = useAppSelector(state => state.user.value);
  const dispatch = useAppDispatch();

  return (
    <>
    <Header />
    <main className='content'>
      <section className='profile'>
        <form className='profile__form' method='post'>
          <input
          type='text'
          name=''
          className='profile__field'
          value={user?.name || ''} />
          <input
          type='text'
          name=''
          className='profile__field'
          value={user?.email || ''} />
        </form>
      </section>
    </main>
    </>
  );
}
