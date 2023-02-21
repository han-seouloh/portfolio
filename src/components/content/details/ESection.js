import styles from './ESection.module.css';

export const ESection = () => {
  return (
    <section>
      <div className={styles.title}>
        <h2>EXPERIENCE</h2>
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