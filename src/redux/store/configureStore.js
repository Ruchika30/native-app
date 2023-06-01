import {createStore, combineReducers} from 'redux';
import reducerList from '../reducers';

const rootReducer = combineReducers({count: reducerList});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
