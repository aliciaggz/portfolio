import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Link, Route } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import Header from './Header';
import AboutMe from './Aboutme';
import Footer from './Footer';
import Hero from './Hero';
import Portfolio from './Portfolio';
import Contact from './Contact';

const App = () => {
  const [sidebar, setSidebar] = useState(false);

  const handleNavButton = () => {
    setSidebar(!sidebar);
  };

  return (
    <div>
      {/* <Header /> */}
      <header className="header">
        <div className="menu__icon">
          <FaIcons.FaBars
            className="menu__icon--fa"
            onClick={handleNavButton}
          />
        </div>

        <nav className={sidebar ? 'menu active' : 'menu'}>
          <ul className="menu__list">
            <li className="menu__list--item">Inicio</li>
            <li className="menu__list--item">Sobre Mi</li>
            <li className="menu__list--item">Portfolio</li>
            <li className="menu__list--item">Contacto</li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Hero />

        <AboutMe />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
