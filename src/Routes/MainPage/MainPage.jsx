import styles from './MainPage.module.scss';
import LandingButton from '../../components/LandingButton/LandingButton';
import { Link } from 'react-router-dom';
import img1 from '../../img/panelPhotos/1.jpg';
import img2 from '../../img/panelPhotos/2.jpg';
import img3 from '../../img/panelPhotos/3.jpg';
import img4 from '../../img/panelPhotos/4.jpg';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div data-testid="Landing background" className={styles.LandingPage}>
        <span data-testid="Landing span">
          Profesjonalne meble na wymiar
          <br />
          Wysoka klasa materiałów
        </span>
        <LandingButton></LandingButton>
      </div>
      <div className={styles.panels}>
        <div className={styles.panel} data-testid="panel">
          <div className={styles.content}>
            <h2>Oferta</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!
            </p>
            <Link to="/oferta">Oferta</Link>
          </div>
          <img src={img1} />
        </div>
        <div className={styles.panel} data-testid="panel">
          <div className={styles.content}>
            <h2>Galeria</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!
            </p>
            <Link to="/galeria">Galeria</Link>
          </div>
          <img src={img2} />
        </div>
        <div className={styles.panel} data-testid="panel">
          <div className={styles.content}>
            <h2>Sklep</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!
            </p>
            <Link to="/sklep">Sklep</Link>
          </div>
          <img src={img3} />
        </div>
        <div className={styles.panel} data-testid="panel">
          <div className={styles.content}>
            <h2>Kontakt</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!
            </p>
            <Link to="/kontakt">Kontakt</Link>
          </div>
          <img src={img4} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
