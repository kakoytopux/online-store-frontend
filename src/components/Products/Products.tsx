import { FC, useEffect } from "react";
import './Products.scss';
import { Product } from "../Product/Product";
import { mainApi } from "../../utils/MainApi";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addItemsData } from "../../redux/slices/items";

interface ItemElement {
  id: number,
  img_url: string,
  name: string,
  desc: string,
  price: string,
}

export const Products: FC = () => {
  const products = useAppSelector(state => state.items.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const productsSession: any = JSON.parse(sessionStorage.getItem('products') || '[]');
    
    if(productsSession.length !== 0) {
      dispatch(addItemsData(productsSession));
      return;
    }

    mainApi.products()
    .then(res => {
      sessionStorage.setItem('products', JSON.stringify(res));
      dispatch(addItemsData(res));
    })
    .catch(err => console.log(err))
  }, [dispatch]);

  return (
    <section className="products">
      <ul className="products__lists lists">
        {products.items?.slice(0).reverse().map((item: ItemElement) =>
          <Product key={item.id} {...item} />
        )}
      </ul>
    </section>
  );
}
