import styles from './MSection.module.css';

export const MSection = () => {
  return (
    <section>
      <div className={styles.title}>
        <h2>MINIREDDIT</h2>
      </div>
      <div className={styles.details}>
        <h3>Introduction</h3>
        <p></p>
        <h3>Subtitle 2</h3>
        <p></p>
      </div>
    </section>
  );
}