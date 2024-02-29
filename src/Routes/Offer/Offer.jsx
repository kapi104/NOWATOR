import Carousel from '../../components/Carousel/Carousel';
import styles from './Offer.module.scss';

const Offer = () => {
  return (
    <main className={styles.offer}>
      <div className={styles.offerPanel}>
        <div className={styles.carouselContainer}>
          <Carousel />
        </div>
        <h1>Oferta</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          perspiciatis placeat nulla. Ratione pariatur maiores numquam sed
          voluptatum molestias rerum eos, natus, distinctio iure minima, impedit
          deleniti alias illum fugiat?
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
          nesciunt consectetur fuga amet explicabo, consequuntur beatae saepe
          repellendus, odit doloribus temporibus? Soluta delectus itaque
          exercitationem impedit, nostrum molestias atque doloremque.
        </p>
        <br />
        <br />
        <section>
          <h2>1</h2>
        </section>
      </div>
    </main>
  );
};

export default Offer;
