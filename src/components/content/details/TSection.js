import styles from './TSection.module.css';

export const TSection = () => {
  return (
    <section>
      <div className={styles.title}>
        <h2>SRA. TANAKA</h2>
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