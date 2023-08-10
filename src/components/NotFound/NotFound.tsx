import { FC } from "react";
import './NotFound.scss';
import { Link } from "react-router-dom";

export const NotFound: FC = () => {
  return (
    <main className="content">
      <section className="notfound">
        <div className="notfound__icon"></div>
        <p className="notfound__desc">Ничего не найдено!</p>
        <div className="notfound__container">
          <Link to='/' className="notfound__link link">На главную</Link>
        </div>
      </section>
    </main>
  );
}
