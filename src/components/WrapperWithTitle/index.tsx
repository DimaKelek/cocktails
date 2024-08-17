import { type PropsWithChildren, type ReactElement } from 'react';

import styles from './WrapperWithTitle.module.scss';

type WrapperWithTitleProps = PropsWithChildren & {
  title: string;
};

export const WrapperWithTitle = (
  props: WrapperWithTitleProps,
): ReactElement => {
  const { title, children } = props;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};
