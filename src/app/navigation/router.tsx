import { createBrowserRouter, Navigate } from 'react-router-dom';

import { App } from '@app/App.tsx';

import { CocktailsPage, ErrorPage } from '@pages';

import { Paths } from './types';

export const router = createBrowserRouter([
  {
    path: Paths.Base,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={Paths.Margarita} replace />,
      },
      {
        path: Paths.BaseCocktail,
        element: <CocktailsPage />,
      },
    ],
  },
  {
    path: Paths.Error,
    element: <ErrorPage />,
  },
]);
