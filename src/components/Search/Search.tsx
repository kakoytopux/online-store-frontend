import { FC, useState } from 'react';
import './Search.scss';
import { useAppDispatch } from '../../redux/hooks';
import { addItemsData } from '../../redux/slices/items';

export const Search: FC = () => {
  const [searchField, setSearchField] = useState('');
  const dispatch = useAppDispatch();

  const onChangeSearchField = (evt: any) => {
    setSearchField(evt.target.value);
  }

  const onSubmit = (evt: any) => {
    evt.preventDefault();

    const productsSession = JSON.parse(sessionStorage.getItem('products') || '[]');

    let data: any[] = [];

    productsSession.items.forEach((item: any) => {
      if(item.name.includes(searchField) || item.desc.includes(searchField)) {
        data.push(item);
      }
    });

    dispatch(addItemsData({ items: data }));
  }

  return (
    <form className='search-form' method='get' onSubmit={onSubmit}>
      <input
      type='text'
      name='search'
      className='search-form__field'
      required
      placeholder='Поиск'
      onChange={onChangeSearchField}
      value={searchField}
      />
      <button type='submit' className='search-form__submit btn' title='Найти'></button>
    </form>
  );
}
