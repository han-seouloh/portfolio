import styles from './PSection.module.css';

export const PSection = () => {
  return (
    <section>
      <div className={styles.title}>
        <h2>PROJECTS</h2>
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