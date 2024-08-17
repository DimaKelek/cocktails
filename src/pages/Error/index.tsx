import { type ReactElement } from 'react';
import {
  isRouteErrorResponse,
  Link,
  useLocation,
  useRouteError,
} from 'react-router-dom';

export const ErrorPage = (): ReactElement => {
  const error = useRouteError();
  const location = useLocation();
  const errorMessage = location.state?.message || 'An unknown error occurred';

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 10,
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{isRouteErrorResponse(error) ? error.statusText : errorMessage}</i>
      </p>
      <Link to={`/`} replace>
        Back
      </Link>
    </div>
  );
};
