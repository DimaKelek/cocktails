import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import { PersistGate } from 'redux-persist/integration/react';

import './styles/index.scss';

import { persistor, store } from '../store';
import { router } from './navigation/router';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} />
    </PersistGate>
  </Provider>,
);
