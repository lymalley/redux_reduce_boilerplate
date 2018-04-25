// This is a fake in-memory implementation of something
// that would be implemented by calling a REST server.

const fakeDatabase = {
  cars: ['PEUGEOT', 'TOYOTA', 'MINI', 'FORD', 'BORGWARD', 'RENAULT', 'BUGGY', 'MERCEDES', 'MITSUBISHY', 'CHEVROLET', 'OPEL'],
  stages: ['Lima / Pisco', 'Pisco / Pisco', 'Pisco / San Juan de Marcona', 'San Juan de Marcona / San Juan de Marcona', 'San Juan de Marcona / Arequipa', 'Arequipa / La Paz', 'La Paz', 'La Paz / Uyuni', 'Uyuni / Tupiza', 'Tupiza / Salta', 'Salta / Belén'],
  drivers: ['Stéphane Peterhansel', 'Carlos Sainz', 'Cyril Despres', 'Sébastien Loeb', 'Nasser Al-Attiyah', 'Kuba Przygoński', 'Bryce Menzies'],
};

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchCars = () => () =>
  delay(500).then(() => {
    if (Math.random() > 0.8) {
      throw new Error('Boom!');
    }
    return fakeDatabase.cars;
  });
export const fetchStages = () => () =>
  delay(500).then(() => {
    if (Math.random() > .8) {
      throw new Error('Boom!');
    }
    return fakeDatabase.stages;
  });
export const fetchDrivers = () => () =>
  delay(500).then(() => {
    if (Math.random() > .8) {
      throw new Error('Boom!');
    }
    return fakeDatabase.drivers;
  });
export const deleteCars = (i) => () => {
  fakeDatabase.cars.splice(i, 1);
  return delay(500).then(() => {
    return i;
  });
};
export const deleteStages = (i) => () => {
  fakeDatabase.stages.splice(i, 1);
  return delay(500).then(() => {
    return i;
  });
};
export const deleteDrivers = (i) => () => {
  fakeDatabase.drivers.splice(i, 1);
  return delay(500).then(() => {
    return i;
  });
};