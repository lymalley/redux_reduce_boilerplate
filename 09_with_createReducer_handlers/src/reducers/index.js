import {combineReducers} from 'redux';
import {cars, drivers, stages} from './reducers';

const reduxApp = combineReducers({
  cars,
  drivers,
  stages,
});

export default reduxApp;
