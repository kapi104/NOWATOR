import styles from './MainPage.module.scss';
import LinkButton from '../../components/LinkButton/LinkButton';
import Panel from '../../components/Panel/Panel';
import img1 from '../../img/panelPhotos/1.jpg';
import img2 from '../../img/panelPhotos/2.jpg';
import img3 from '../../img/panelPhotos/3.jpg';
import img4 from '../../img/panelPhotos/4.jpg';
import downArrow from '../../img/downArrow.svg';

const MainPage = () => {
  return (
    <div className={styles.mainPage}>
      <div data-testid="Landing background" className={styles.LandingPage}>
        <div className={styles.gradientCover}></div>
        <span data-testid="Landing span">
          Profesjonalne meble na wymiar
          <br />
          Wysoka klasa materiałów
        </span>
        <LinkButton content="Nasza Oferta" />
        <div className={styles.downArrows}>
          <img src={downArrow} className={styles.ar1} />
          <img src={downArrow} className={styles.ar2} />
        </div>
      </div>
      <div className={styles.panels}>
        <Panel
          title="Oferta"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!"
          img={img1}
        />
        <Panel
          title="Galeria"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!"
          img={img2}
          reverse={true}
        />
        <Panel
          title="Sklep"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!"
          img={img3}
        />
        <Panel
          title="Kontakt"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              fugit doloremque ab nam, pariatur accusamus reiciendis dolor,
              similique modi ex debitis eveniet enim totam ipsum quas aliquid
              itaque libero architecto!"
          img={img4}
          reverse={true}
        />
      </div>
    </div>
  );
};

export default MainPage;
