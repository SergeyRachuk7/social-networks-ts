// import React from 'react';
// import './index.css';
// import reportWebVitals from './reportWebVitals';

// import { renderTree } from "./render"
// import store from './redux/state';



// store.subcribe(renderTree)
// renderTree();


// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { renderTree } from "./render"
import store from './redux/state';

// Викликаємо renderTree з state
const state = store.getState();
store.subcribe(() => {
  renderTree(store.getState());
});
renderTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals.console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
