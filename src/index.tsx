import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import { PersistGate } from 'redux-persist/integration/react';

import { App } from './components/App';

import { Loader } from '@/components/Loader';
import { persistor, store } from '@/store';

const rootElement = document.querySelector('#root');
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={'Загрузка...'} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
);
