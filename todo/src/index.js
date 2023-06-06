import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './_store';

import { fakeBackend } from './_helpers';
fakeBackend();

const root = ReactDOM.createRoot(document.getElementById("root"));
const DATA = [];
root.render(
  <React.StrictMode>
      <Provider store={store}>
         <BrowserRouter>
            <App tasks={DATA} />
        </BrowserRouter>
      </Provider>
  </React.StrictMode>
);
reportWebVitals();
