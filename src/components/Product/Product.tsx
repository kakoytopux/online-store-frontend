import React, { FC } from "react";
import './Product.scss';
import { Link } from "react-router-dom";

interface Props {
  img_url: string,
  name: string,
  desc: string,
  price: string,
}

export const Product: FC<Props> = ({ img_url, name, desc, price }): JSX.Element => {
  return (
    <li className="product">
      <Link to='/#' className="product__link link" />
      <img src={img_url} alt={name} className="product__img" />
      <div className="product__container">
        <h3 className="product__title">{name}</h3>
        <p className="product__desc">{desc}</p>
        <div className="product__box">
          <p className="product__price">{price} &#8381;</p>
        </div>
      </div>
    </li>
  );
}
