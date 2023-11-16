const categories = ['Все', 'Десерты и сладости', 'Кондитерские изделия', 'Выпечки'];

const Categories = ({ value, onCategoryClick }) => {
  return (
    <div className="categories">
      <div className="categories__container">
        <div className="categories__title">
          <p>Ассортимент</p>
          <span>Какой десерт выберете вы?</span>
        </div>
        <ul>
          {categories.map((category, i) => {
            return (
              <li key={i} onClick={() => onCategoryClick(i)} className={value === i ? 'activ' : ''}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
