import logo from '../../img/logo.svg';
import styles from './Header.module.scss';

import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header id={styles.banner}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>

      <nav>
        <ul>
          <li>
            <NavLink
              to="/oferta"
              className={({ isActive, isPending }) =>
                isActive
                  ? styles.active
                  : isPending
                    ? styles.active
                    : styles.inactive
              }
            >
              Oferta
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/galeria"
              className={({ isActive, isPending }) =>
                isActive
                  ? styles.active
                  : isPending
                    ? styles.active
                    : styles.inactive
              }
            >
              Galeria
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sklep"
              className={({ isActive, isPending }) =>
                isActive
                  ? styles.active
                  : isPending
                    ? styles.active
                    : styles.inactive
              }
            >
              Sklep
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kontakt"
              className={({ isActive, isPending }) =>
                isActive
                  ? styles.active
                  : isPending
                    ? styles.active
                    : styles.inactive
              }
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
