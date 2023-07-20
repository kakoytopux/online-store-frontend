import React, { FC } from "react";
import './Main.scss';
import { Header } from "../Header/Header";
import { Products } from "../Products/Products";

export const Main: FC = () => {
  return (
    <>
      <Header />
      <main className="content">
        <Products />
      </main>
    </>
  );
}
