import styles from './Panel.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Panel = ({ title, text, img }) => {
  return (
    <div className={styles.panel} data-testid="panel">
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link to={`/${title.toLowerCase()}`}>{title}</Link>
      </div>
      <img src={img} />
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.node,
};

export default Panel;
