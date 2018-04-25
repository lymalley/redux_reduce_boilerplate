import * as api from '../api';

export const fetchCars = () => ({
  types: ['FETCH_CARS_REQUEST', 'FETCH_CARS_COMPLETE', 'FETCH_CARS_ERROR'],
  api: api.fetchCars(),
});

export const fetchStages = () => ({
  types: ['FETCH_STAGES_REQUEST', 'FETCH_STAGES_COMPLETE', 'FETCH_STAGES_ERROR'],
  api: api.fetchStages(),
});

export const fetchDrivers = () => ({
  types: ['FETCH_DRIVERS_REQUEST', 'FETCH_DRIVERS_COMPLETE', 'FETCH_DRIVERS_ERROR'],
  api: api.fetchDrivers(),
});

export const deleteCars = (i) => ({
  types: ['DELETE_CARS_REQUEST', 'DELETE_CARS_COMPLETE', 'DELETE_CARS_ERROR'],
  api: api.deleteCars(i),
});

export const deleteStages = (i) => ({
  types: ['DELETE_STAGES_REQUEST', 'DELETE_STAGES_COMPLETE', 'DELETE_STAGES_ERROR'],
  api: api.deleteStages(i),
});

export const deleteDrivers = (i) => ({
  types: ['DELETE_DRIVERS_REQUEST', 'DELETE_DRIVERS_COMPLETE', 'DELETE_DRIVERS_ERROR'],
  api: api.deleteDrivers(i),
});
