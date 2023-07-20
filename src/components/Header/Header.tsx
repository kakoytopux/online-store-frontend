import React, { FC } from "react";
import './Header.scss';
import { NavLink, Link } from "react-router-dom";

export const Header: FC = () => {
  return (
    <header className="header">
      <Link to='/' className="header__icon link" />
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
      <ul className="header__auth-lists lists">
        <li className="header__auth-list">
          <Link to='/register' className="header__auth-list-link header__auth-list-link_type_reg link">Регистрация</Link>
        </li>
        <li className="header__auth-list">
          <Link to='/auth' className="header__auth-list-link link">Войти</Link>
        </li>
      </ul>
    </header>
  );
}
