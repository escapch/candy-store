import { useState } from 'react';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Main from '../components/Main';
import { useEffect } from 'react';
import About from '../components/About';

const Home = () => {
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
    <div className="home">
      <Main />

      <Categories value={categoryId} onCategoryClick={(i) => setCategoriyId(i)} />
      <div className="card__container">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
      <About />
    </div>
  );
};

export default Home;
