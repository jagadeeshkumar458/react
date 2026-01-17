import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux-toolkit/store';
import { ordered as cakeOrdered, restocked as cakeRestocked} from './Redux-toolkit/features/cake/cakeSlice';
import { ordered as iceCremOrdered, restocked as icecreamRestocked } from './Redux-toolkit/features/icecream/icecreamSlice';

console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated state', store.getState())
})
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeOrdered())
store.dispatch(cakeRestocked(3))
store.dispatch(iceCremOrdered())
store.dispatch(iceCremOrdered())
store.dispatch(icecreamRestocked(2))
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
