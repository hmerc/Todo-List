import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { loadState, saveState } from './storage';

import App from './components/app';
import reducers from './reducers';

import routes from './routes';

const localStorageMiddleware = ({getState}) => {
  return (next) => (action) => {
    const result = next(action);
    	saveState(getState());
    return result;
  };
};


const persistedState = loadState();
const createStoreWithMiddleware = applyMiddleware(localStorageMiddleware)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,persistedState,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
   	<Router history={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
