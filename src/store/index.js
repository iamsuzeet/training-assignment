import { createStore, compose } from 'redux';

import rootReducer from './root-reducer';

const composeEnhancer =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(rootReducer, composeEnhancer());

export default store;
