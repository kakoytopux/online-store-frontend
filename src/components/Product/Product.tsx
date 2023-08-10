import { FC } from "react";
import './Product.scss';
import { Link } from "react-router-dom";

interface Props {
  img_url: string,
  name: string,
  desc: string,
  price: string,
}

export const Product: FC<Props> = ({ img_url, name, desc, price }) => {
  return (
    <li className="product">
      <Link to='/#' className="product__link link" />
      <img src={img_url} alt={name} className="product__img" />
      <h3 className="product__title">{name}</h3>
      <p className="product__desc">{desc}</p>
      <div className="product__container">
        <p className="product__price">{price} &#8381;</p>
        <div className="product__box">
          <button type="button" className="product__heart btn"></button>
          <button type="button" className="product__cart btn"></button>
        </div>
      </div>
    </li>
  );
}
