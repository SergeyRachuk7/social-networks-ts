import { RootStateType } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/state';



export const renderTree = (state: RootStateType) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>
  );
}