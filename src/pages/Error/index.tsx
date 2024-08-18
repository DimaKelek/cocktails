import { type ReactElement } from 'react';
import {
  isRouteErrorResponse,
  Link,
  useLocation,
  useRouteError,
} from 'react-router-dom';

import { Paths } from '@app/navigation/types';

import Logo from '@shared/assets/logo.png';

import styles from './Error.module.scss';

export const ErrorPage = (): ReactElement => {
  const error = useRouteError();

  const location = useLocation();
  const errorMessage = location.state?.message || 'An unknown error occurred';

  return (
    <div className={styles.container}>
      <img src={Logo} className={styles.logo} alt={'logo'} />
      <div className={styles.error}>
        <h1>{'Oops!'}</h1>
        <p>{'Sorry, an unexpected error has occurred.'}</p>
        <p>
          <i>{isRouteErrorResponse(error) ? error.statusText : errorMessage}</i>
        </p>
      </div>
      <Link className={styles.backButton} to={Paths.Base} replace>
        {'Back'}
      </Link>
    </div>
  );
};
