import styles from './CSection.module.css';

export const CSection = () => {
  return (
    <section>
      <div className={styles.title}>
        <h2>CURRENT PROJECTS</h2>
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