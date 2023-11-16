import mikasa from '../assets/img/mikasa.jpg';

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content">
          <div className="about__text">
            <div className="title">
              <p>Обо мне</p>
              <a href="https://instagram.com/nazgulya_bekmurzaeva?igshid=NzZlODBkYWE4Ng==">
                @nazgulya_bekmurzaeva
              </a>
            </div>
            <h1>Здравствуйте! Меня зовут Назгуль</h1>
            <p>
              Я являюсь автором всей, представленной на этом сайте продукции. В каждом изделии
              вложена частичка моей души!
              <br />
              <br />
              Приглашаю вас окунуться в сладкий мир удивительных кондитерских изделий, которые
              сделают ваш праздник особенно вкусным и незабываемым!
              <br />
              <br />
              Мое призвание - дарить радость и положительные эмоции людям, а мое кредо - высокое
              качество изготавливаемой продукции, внимание к деталям и индивидуальный подход.
            </p>
          </div>
          <div className="about__img">
            <img src={mikasa} alt="mikasa" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
