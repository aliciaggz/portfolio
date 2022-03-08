import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import { useEffect, useState } from 'react';

const Header = (props) => {
  const [sidebar, setSidebar] = useState(false);
  const handleNavButton = () => {
    setSidebar(!sidebar);
  };
  return (
    <header className="header">
      <div className="menu__icon">
        <FaIcons.FaBars className="menu__icon--fa" onClick={handleNavButton} />
      </div>

      <nav className={props.sidebar ? 'menu active' : 'menu'}>
        <ul className="menu__list">
          <li className="menu__list--item">Inicio</li>
          <li className="menu__list--item">Sobre Mi</li>
          <li className="menu__list--item">Portfolio</li>
          <li className="menu__list--item">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
