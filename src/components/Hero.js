import photome from '../images/aliciadibujo.png';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import circle from '../images/capa1.png';
import line from '../images/capa2.png';

const Hero = (props) => {
  return (
    <section className="section__intro">
      <img className="circle" src={circle} alt="" />
      <div className="section__intro--div">
        <img className="section__intro--img" src={photome} alt="" />
        <div className="section__intro--div1">
          <h1 className="section__intro--title ">
            Hola, me llamo Alicia Gallego
          </h1>

          <p className="section__intro--text">y soy Front-End Developer</p>
          <ul className="section__intro--list">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/aliciagallegogonzalez/"
              >
                <FaIcons.FaLinkedin className="section__intro--icons" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/aliciaggz"
              >
                <FaIcons.FaGithubSquare className="section__intro--icons" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/aliciaggz"
              >
                <IoIcons.IoMdMail className="section__intro--icons" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section__intro--div">
        <img src="" alt="" />
      </div>
      <img className="line" src={line} alt="" />
    </section>
  );
};

export default Hero;
