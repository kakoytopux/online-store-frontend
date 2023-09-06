import { FC } from "react";
import './Header.scss';
import { NavLink, Link } from "react-router-dom";
import { useAppSelector } from '../../redux/hooks';
import { Search } from "../Search/Search";

export const Header: FC = () => {
  const auth = useAppSelector(state => state.auth.value);

  return (
    <header className="header">
      <Link to='/' className="header__icon link" title="Online Store" />
      <nav className="header__navigation">
        <ul className="header__nav-lists lists">
          <li className="header__nav-list">
            <NavLink to='/phones' className={({ isActive }) =>
            `header__nav-list-link link ${isActive ? 'header__nav-list-link_active' : ''}`}>
                Телефоны
            </NavLink>
          </li>
          <li className="header__nav-list">
            <NavLink to='/pc' className={({ isActive }) =>
            `header__nav-list-link link ${isActive ? 'header__nav-list-link_active' : ''}`}>
                Компьютеры
            </NavLink>
          </li>
          <li className="header__nav-list">
            <NavLink to='/tablets' className={({ isActive }) =>
            `header__nav-list-link link ${isActive ? 'header__nav-list-link_active' : ''}`}>
                Планшеты
            </NavLink>
          </li>
          <li className="header__nav-list">
            <NavLink to='/headphones' className={({ isActive }) =>
            `header__nav-list-link link ${isActive ? 'header__nav-list-link_active' : ''}`}>
                Наушники
            </NavLink>
          </li>
        </ul>
      </nav>
      <Search />
      <div className="header__box-auth">
        {auth ?
        <Link to='/profile' className="header__profile-link link">Профиль</Link>
        :
        <>
        <Link to='/register' className="header__auth-link header__auth-link_type_reg link">Регистрация</Link>
        <Link to='/login' className="header__auth-link link">Войти</Link>
        </>
        }
      </div>
    </header>
  );
}
