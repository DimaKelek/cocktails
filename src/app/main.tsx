import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import { CocktailCodes } from '@api';

import './styles/index.scss';
import { CocktailsPage, ErrorPage } from '@pages';

import { persistor, store } from '../store';
import { App } from './App.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: (
          <Navigate to={`cocktails/${CocktailCodes.Margarita}`} replace />
        ),
      },
      {
        path: 'cocktails/:cocktailId',
        element: <CocktailsPage />,
      },
    ],
  },
  {
    path: 'error',
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
