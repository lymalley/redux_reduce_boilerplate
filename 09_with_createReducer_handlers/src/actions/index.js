import * as api from '../api';
import {defineActions, getTypes} from "./utils";

const CARS_PREFIX = 'CARS';
const DRIVERS_PREFIX = 'DRIVERS';
const STAGES_PREFIX = 'STAGES';
const INFIXES = ['FETCH', 'DELETE'];

export const carsActions = defineActions(CARS_PREFIX, INFIXES);
export const driversActions = defineActions(DRIVERS_PREFIX, INFIXES);
export const stagesActions = defineActions(STAGES_PREFIX, INFIXES);

export const fetchCars = () => ({
  types: getTypes(CARS_PREFIX, 'FETCH'),
  api: api.fetchCars(),
});

export const fetchStages = () => ({
  types: getTypes(STAGES_PREFIX, 'FETCH'),
  api: api.fetchStages(),
});

export const fetchDrivers = () => ({
  types:getTypes(DRIVERS_PREFIX, 'FETCH'),
  api: api.fetchDrivers(),
});

export const deleteCars = (i) => ({
  types: getTypes(CARS_PREFIX, 'DELETE'),
  api: api.deleteCars(i),
});

export const deleteStages = (i) => ({
  types: getTypes(STAGES_PREFIX, 'DELETE'),
  api: api.deleteStages(i),
});

export const deleteDrivers = (i) => ({
  types:getTypes(DRIVERS_PREFIX, 'DELETE'),
  api: api.deleteDrivers(i),
});
