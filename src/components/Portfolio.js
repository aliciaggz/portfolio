const Portfolio = (props) => {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title">Portfolio</h1>

      <ul className="portfolio__list">
        <li className="portfolio__list--item">
          <div className="image uno"></div>
        </li>
        <li className="portfolio__list--item">
          <div className="image dos"></div>
        </li>
        <li className="portfolio__list--item">
          <div className="image tres"></div>
        </li>
        <li className="portfolio__list--item ">
          <div className="image cuatro"></div>
        </li>
        <li className="portfolio__list--item uno"></li>
        <li className="portfolio__list--item dos"></li>
      </ul>
    </section>
  );
};
export default Portfolio;
