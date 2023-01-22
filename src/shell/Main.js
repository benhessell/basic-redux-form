import React from 'react';

import Routes from './Routes.js';
import { Provider } from 'react-redux';
import { store } from '../redux-components/store.js';


export default function Main() {
  return (
     <div className="main">
       <Provider store={store}>
        <Routes />
       </Provider>
     </div>
    );
}