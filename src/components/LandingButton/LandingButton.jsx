import { Link } from 'react-router-dom';
import styles from './LandingButton.module.scss';

const LandingButton = () => {
  return (
    <Link to="/oferta" className={styles.LandingButton}>
      Nasza Oferta
    </Link>
  );
};

export default LandingButton;
