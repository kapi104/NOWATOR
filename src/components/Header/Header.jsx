import logo from '../../img/logo.svg';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id={styles.banner}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <ul>
        <li>
          <Link to="/Oferta">Oferta</Link>
        </li>
        <li>
          <Link to="/Galeria">Galeria</Link>
        </li>
        <li>
          <Link to="/Sklep">Sklep</Link>
        </li>
        <li>
          <Link to="/Kontakt">Kontakt</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
