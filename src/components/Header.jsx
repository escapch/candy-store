import logo from '../assets/img/logo-Candy.png';
import telegram from '../assets/img/telegram.png';
import whatsapp from '../assets/img/whatsapp.png';
import gps from '../assets/img/location.png';
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__content">
          <div className="location">
            <img src={gps} alt="" />
            <a href="/">город Ош</a>
          </div>
          <div className="header__logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="tel">
            <a href="/">+996 500 968 094</a>
            <div className="messengers">
              <a href="/">
                <img src={telegram} alt="telegram" />
              </a>
              <a href="/">
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
