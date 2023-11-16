import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="title">
          <p className="orange">
            Дом сладких радостей.
            <br />
            <span>торты, десерты и выпечки</span>
          </p>
        </div>
        <div className="subtitle">
          <p>
            Благодаря нам вы сможете насладиться десертами из натуральных ингридиентов и порадовать
            близких!
          </p>
        </div>
        <div className="orderBtn">
          <Link to="/catalog">Перейти в каталог</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
