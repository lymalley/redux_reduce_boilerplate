import * as api from '../api';

const fetchCarsRequest = () => ({
  type: 'FETCH_CARS_REQUEST',
});

const fetchCarsComplete = (cars) => ({
  type: 'FETCH_CARS_COMPLETE',
  cars,
});

const fetchCarsError = (error) => ({
  type: 'FETCH_CARS_ERROR',
  error,
});

export const fetchCars = () => (dispatch, getState) => {
  dispatch(fetchCarsRequest());
  return api.fetchCars().then(
    response => dispatch(fetchCarsComplete(response)),
    error => dispatch(fetchCarsError(error)),
  );
};

const fetchDriversRequest = () => ({
  type: 'FETCH_DRIVERS_REQUEST',
});

const fetchDriversComplete = (drivers) => ({
  type: 'FETCH_DRIVERS_COMPLETE',
  drivers,
});

const fetchDriversError = (error) => ({
  type: 'FETCH_DRIVERS_ERROR',
  error,
});

export const fetchDrivers = () => (dispatch, getState) => {
  dispatch(fetchDriversRequest());
  return api.fetchDrivers().then(
    response => dispatch(fetchDriversComplete(response)),
    error => dispatch(fetchDriversError(error)),
  );
};

const fetchStagesRequest = () => ({
  type: 'FETCH_STAGES_REQUEST',
});

const fetchStagesComplete = (stages) => ({
  type: 'FETCH_STAGES_COMPLETE',
  stages,
});

const fetchStagesError = (error) => ({
  type: 'FETCH_STAGES_ERROR',
  error,
});

export const fetchStages = () => (dispatch, getState) => {
  dispatch(fetchStagesRequest());
  return api.fetchStages().then(
    response => dispatch(fetchStagesComplete(response)),
    error => dispatch(fetchStagesError(error)),
  );
};