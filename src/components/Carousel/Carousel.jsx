import { useRef } from 'react';
import img1 from '../../img/carouselPhotos/1.jpg';
import img2 from '../../img/carouselPhotos/2.jpg';
import img3 from '../../img/carouselPhotos/3.jpg';
import img4 from '../../img/carouselPhotos/4.jpg';
import styles from './Carousel.module.scss';
import { useState } from 'react';
import { useEffect } from 'react';

const Carousel = () => {
  const img = useRef();
  const nextImg = useRef();
  const [currentPhoto, setCurrentPhoto] = useState(1);

  useEffect(() => {
    const photos = [img1, img2, img3, img4];
    const changePhoto = () => {
      nextImg.current.classList.remove(styles.translate100);
      setTimeout(() => {
        img.current.src = photos[currentPhoto];
        currentPhoto === 3
          ? (nextImg.current.src = photos[0])
          : (nextImg.current.src = photos[currentPhoto + 1]);
        nextImg.current.classList.add(styles.translate100);
      }, 500);
    };

    setTimeout(() => {
      currentPhoto < 3 ? setCurrentPhoto(currentPhoto + 1) : setCurrentPhoto(0);
      changePhoto();
    }, 5000);
  }, [currentPhoto]);

  return (
    <div className={styles.carousel}>
      <div className={styles.imgBorder}>
        <div className={styles.imgWrapper}>
          <img src={img1} alt="" ref={img} />
          <img
            src={img2}
            alt=""
            ref={nextImg}
            className={`${styles.nextImg} ${styles.translate100}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
