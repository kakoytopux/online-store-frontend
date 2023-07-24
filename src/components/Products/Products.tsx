import React, { FC, useState, useEffect } from "react";
import './Products.scss';
import { Product } from "../Product/Product";
import { mainApi } from "../../utils/MainApi";

interface ItemElement {
  id: number,
  img_url: string,
  name: string,
  desc: string,
  price: string,
}
interface Items {
  items: ItemElement[],
}

export const Products: FC = () => {
  const [products, setProducts] = useState<Items>({items: []});

  useEffect(() => {
    mainApi.products
    .then((res) => setProducts(res))
    .catch((err) => console.log(err))
  }, []);

  return (
    <section className="products">
      <ul className="products__lists lists">
        {products.items.slice(0).reverse().map((item: ItemElement) =>
          <Product key={item.id} {...item} />
        )}
      </ul>
    </section>
  );
}
