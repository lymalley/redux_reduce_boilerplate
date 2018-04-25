import {createDefaultHandlers, createReducer} from "./utils";
import {carsActions, driversActions, stagesActions} from "../actions";

const initialState = {
  data: [],
  loading: false,
  error: undefined
};
export const cars = createReducer(initialState, {
  ...createDefaultHandlers(carsActions, 'cars'),
  // create default handlers will create those handlers
  // CARS_FETCH_REQUEST: (state, action) => {},
  // CARS_FETCH_COMPLETE: (state, action) => {},
  // CARS_FETCH_ERROR: (state, action) => {},
  // CARS_DELETE_REQUEST: (state, action) => {},
  // CARS_DELETE_COMPLETE: (state, action) => {},
  // CARS_DELETE_ERROR: (state, action) => {},
  CUSTOM_ACTION: (state, action) => {
    alert('do whatever your want');
    return state;
  },
});

export const drivers = createReducer(initialState, {
  ...createDefaultHandlers(driversActions, 'drivers'),
});

export const stages = createReducer(initialState, {
  ...createDefaultHandlers(stagesActions, 'stages'),
});