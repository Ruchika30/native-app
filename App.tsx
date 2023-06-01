import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
