/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
//   whitelist: ['user', 'service', 'market', 'unread'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

// const store = createStore(persistedReducer, applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk),
      process.env.NODE_ENV === 'development' && window.devToolsExtension
        ? window.devToolsExtension()
        : f => f,
    ),
  );
  let persistor = persistStore(store);
  return {store, persistor};
};
// export default store;
