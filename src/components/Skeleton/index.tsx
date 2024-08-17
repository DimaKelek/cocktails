import { type ReactElement } from 'react';

import styles from './Skeleton.module.scss';

export const Skeleton = (): ReactElement => {
  return <div className={styles.skeleton} />;
};
