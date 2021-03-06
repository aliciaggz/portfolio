import leave from '../images/leave.png';
import cloud from '../images/cloud.png';

const AboutMe = (props) => {
  return (
    <section className="section__aboutme">
      <h1 className="section__aboutme--title stroke shadow">Sobre mí</h1>
      <img className="back__image leave" src={leave} alt="" />
      <p className="section__aboutme--text">
        Al terminar mis estudios universitarios en mitad de una pandemia, empecé
        a replantearme mi futuro y decidí enfocar mi camino hacia el mundo de la
        programación. Esta decisión como muchas otras no fue tomada a la ligera.
        Además de haber cursado una asignatura en la carrera sobre desarrollo
        web, investigué y me formé por mi cuenta con el objetivo de encontrar un
        sector que me plantease retos y posibilidades de crecer y superarme a mí
        misma.
      </p>
      <img className="back__image cloud" src={cloud} alt="" />
    </section>
  );
};

export default AboutMe;
