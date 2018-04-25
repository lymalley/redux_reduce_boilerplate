import * as api from '../api';

const deleteCarsRequest = () => ({
  type: 'DELETE_CARS_REQUEST',
});

const deleteCarsComplete = (indexDeleted) => ({
  type: 'DELETE_CARS_COMPLETE',
  indexDeleted,
});

const deleteCarsError = (error) => ({
  type: 'DELETE_CARS_ERROR',
  error,
});

export const deleteCars = (i) => (dispatch, getState) => {
  dispatch(deleteCarsRequest());
  return api.deleteCars(i).then(
    response => dispatch(deleteCarsComplete(response)),
    error => dispatch(deleteCarsError(error)),
  );
};
const deleteDriversRequest = () => ({
  type: 'DELETE_DRIVERS_REQUEST',
});

const deleteDriversComplete = (indexDeleted) => ({
  type: 'DELETE_DRIVERS_COMPLETE',
  indexDeleted,
});

const deleteDriversError = (error) => ({
  type: 'DELETE_DRIVERS_ERROR',
  error,
});

export const deleteDrivers = (i) => (dispatch, getState) => {
  dispatch(deleteDriversRequest());
  return api.deleteDrivers(i).then(
    response => dispatch(deleteDriversComplete(response)),
    error => dispatch(deleteDriversError(error)),
  );
};

const deleteStagesRequest = () => ({
  type: 'DELETE_STAGES_REQUEST',
});

const deleteStagesComplete = (indexDeleted) => ({
  type: 'DELETE_STAGES_COMPLETE',
  indexDeleted,
});

const deleteStagesError = (error) => ({
  type: 'DELETE_STAGES_ERROR',
  error,
});

export const deleteStages = (i) => (dispatch, getState) => {
  dispatch(deleteStagesRequest(i));
  return api.deleteStages(i).then(
    response => dispatch(deleteStagesComplete(response)),
    error => dispatch(deleteStagesError(error)),
  );
};