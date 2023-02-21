import styles from './ASection.module.css';

export const ASection = () => {
  return (
    <section>
      <div className={styles.title}>
        <h2>ABOUT ME</h2>
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