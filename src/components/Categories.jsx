import { useEffect, useState } from 'react';
import Card from './Card';

const categories = ['Все', 'Десерты и сладости', 'Кондитерские изделия', 'Выпечки'];

const Categories = () => {
  const [items, setItems] = useState([]);
  const [categoryId, setCategoriyId] = useState(0);

  useEffect(() => {
    const categoryFilter = categoryId > 0 ? 'category=' + categoryId : '';
    fetch(`https://05a829f135e7dec5.mokky.dev/items?${categoryFilter}`)
      .then((res) => res.json()) // Добавлено преобразование ответа в JSON
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, [categoryId]);
  return (
    <div className="categories">
      <div className="categories__title __container">
        <p>Каталог</p>
        <span>Какой десерт выберете вы?</span>
      </div>
      <ul>
        {categories.map((category, i) => {
          return (
            <li
              key={i}
              onClick={() => setCategoriyId(i)}
              className={categoryId === i ? 'activ' : ''}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <div className="card__container">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
