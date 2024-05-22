import state, { RootStateType } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



export const renderTree = (state: RootStateType) => {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}