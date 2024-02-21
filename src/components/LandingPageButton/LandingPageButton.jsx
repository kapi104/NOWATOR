import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './LandingPageButton.module.scss';

const LinkButton = ({ content, reverse = false }) => {
  return (
    <Link
      to="/oferta"
      className={`${styles.LinkButton} ${reverse ? styles.reverse : ''}`}
    >
      {content}
    </Link>
  );
};

LinkButton.propTypes = {
  content: PropTypes.string,
  reverse: PropTypes.bool,
};

export default LinkButton;
