import styles from './MainPage.module.scss';
import LandingButton from '../../components/LandingButton/LandingButton';

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
    </div>
  );
};

export default MainPage;
