import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.adres}>
          <span>Gosprzydowa 27</span>
          <span>502 752 331</span>
        </div>
        <ul>
          <li>
            <Link to="/">Strona Glówna</Link>
          </li>
          <li>
            <Link to="/oferta">Oferta</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link to="/sklep">Sklep</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
        <img src={logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
