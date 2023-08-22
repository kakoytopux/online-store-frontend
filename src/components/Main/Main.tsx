import { FC } from "react";
import './Main.scss';
import { Header } from "../Header/Header";
import { Products } from "../Products/Products";
import { Footer } from "../Footer/Footer";

export const Main: FC = () => {
  return (
    <>
      <Header />
      <main className="content content-main">
        <Products />
      </main>
      <Footer />
    </>
  );
}
