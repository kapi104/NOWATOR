import styles from './Panel.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LinkButton from '../LinkButton/LinkButton';

const Panel = ({ title, text, img, reverse = false }) => {
  if (!reverse) {
    return (
      <div className={styles.panel} data-testid="panel">
        <div className={styles.content}>
          <LinkButton content={title} />
          <p>{text}</p>
        </div>
        <div className={styles.imgWrapper}>
          <Link to={`/${title.toLowerCase()}`}>
            <img src={img} />
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`${styles.panel} ${styles.reverse}`} data-testid="panel">
        <div className={styles.imgWrapper}>
          <Link to={`/${title.toLowerCase()}`}>
            <img src={img} />
          </Link>
        </div>
        <div className={styles.content}>
          <LinkButton content={title} reverse={true} />
          <p>{text}</p>
        </div>
      </div>
    );
  }
};

Panel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.node,
  reverse: PropTypes.bool,
};

export default Panel;
