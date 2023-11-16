import { useEffect, useState } from 'react';
import cardImg from '../assets/img/fon1.png';
import Card from './Card';
const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetch(`https://05a829f135e7dec5.mokky.dev/items?rating=8`)
      .then((res) => res.json()) // Добавлено преобразование ответа в JSON
      .then((data) => {
        setPopular(data);
      })
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);
  return (
    <div className="popular">
      <div className="popular__content">
        <div className="popular__title __container">Популярные продукты</div>
        <div className="popular__container ">
          {popular.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
