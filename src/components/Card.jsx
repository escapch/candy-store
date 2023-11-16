const Card = ({ title, price, ingredients, imgUrl }) => {
  const ingredientsString = ingredients.join(', ');
  return (
    <div className="card">
      <div className="card__content">
        <div className="content__top">
          <div className="card__img">
            <img src={imgUrl} alt="img" />
          </div>
          <div className="content__title">
            <p>{title}</p>
            <p className="ingredients">{ingredientsString}</p>
            <span>от {price} сом</span>
          </div>
        </div>
        <div className="content__btn">
          <button>Заказать</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
