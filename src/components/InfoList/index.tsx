import styles from './InfoList.module.scss';

type InfoListProps = {
  labels: string[];
  values: string[];
};

export const InfoList = (props: InfoListProps) => {
  const { labels, values } = props;

  return (
    <div className={styles.mainInfo}>
      <div className={styles.labels}>
        {labels.map((label, index) => (
          <p key={`${label}-${index}`} className={styles.label}>
            {label}
          </p>
        ))}
      </div>
      <div className={styles.labels}>
        {values.map((value, index) => (
          <p key={`${value}-${index}`} className={styles.text}>
            {value}
          </p>
        ))}
      </div>
    </div>
  );
};
