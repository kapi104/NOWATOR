import img1 from '../../img/panelPhotos/1.jpg';
import img2 from '../../img/panelPhotos/2.jpg';
import img3 from '../../img/panelPhotos/3.jpg';
import styles from './ImagesDisplay.module.scss';

const ImagesDisplay = () => {
  return (
    <div className={styles.ImagesDisplay}>
      <div className={`${styles.wrapper} ${styles.w1}`}>
        <img src={img1} alt="" className={styles.img1} />
      </div>
      <div className={`${styles.wrapper} ${styles.w2}`}>
        <img src={img2} alt="" className={styles.img2} />
      </div>
      <div className={`${styles.wrapper} ${styles.w3}`}>
        <img src={img3} alt="" className={styles.img3} />
      </div>
    </div>
  );
};

export default ImagesDisplay;
