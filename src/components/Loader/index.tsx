import { type ReactElement } from 'react';

import styles from './Loader.module.scss';

export const Loader = (): ReactElement => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader} />
    </div>
  );
};
