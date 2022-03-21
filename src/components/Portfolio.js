import dice from '../images/dice.png';
import anime from '../images/anime.png';
import drumkit from '../images/drumkit.png';
import game from '../images/game.png';

const Portfolio = (props) => {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>

      <ul className="portfolio__list">
        <li className="portfolio__list--item">
          <img src={dice} alt="" />
        </li>
        <li className="portfolio__list--item">
          <img src={drumkit} alt="" />
        </li>
        <li className="portfolio__list--item">
          <img src={anime} alt="" />
        </li>
        <li className="portfolio__list--item ">
          <img src={game} alt="" />
        </li>
        <li className="portfolio__list--item">
          <img src={dice} alt="" />
        </li>
        <li className="portfolio__list--item ">
          <img src={drumkit} alt="" />
        </li>
      </ul>
    </section>
  );
};
export default Portfolio;
