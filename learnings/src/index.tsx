import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux-toolkit/store';
import { ordered, restocked } from './Redux-toolkit/features/cake/cakeSlice';

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated state', store.getState())
})
store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(ordered())
store.dispatch(restocked(3))
unsubscribe()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
