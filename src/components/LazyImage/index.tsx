import { type ImgHTMLAttributes, type ReactElement, useState } from 'react';

import { Skeleton } from '@components';

import styles from './LazyImage.module.scss';

type LazyImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const LazyImage = (props: LazyImageProps): ReactElement => {
  const { src, alt, ...restProps } = props;

  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      {!loaded && <Skeleton />}
      <img
        {...restProps}
        style={!loaded ? { opacity: 0 } : { opacity: 1 }}
        className={styles.image}
        src={src}
        alt={alt}
        loading={'lazy'}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};
