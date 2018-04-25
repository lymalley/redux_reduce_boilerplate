const initialState = {
  data: [],
  loading: false,
  error: undefined
};

export const cars = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CARS_REQUEST':
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case 'FETCH_CARS_COMPLETE':
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        error: undefined,
      };
    case 'FETCH_CARS_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case 'DELETE_CARS_REQUEST':
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case 'DELETE_CARS_COMPLETE':
      return {
        ...state,
        data: state.data.filter((d, i) => {
          console.log(d, i, action.payload);
          return i !== action.payload
        }),
        loading: false,
        error: undefined,
      };
    case 'DELETE_CARS_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const drivers = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DRIVERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case 'FETCH_DRIVERS_COMPLETE':
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        error: undefined,
      };
    case 'FETCH_DRIVERS_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case 'DELETE_DRIVERS_REQUEST':
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case 'DELETE_DRIVERS_COMPLETE':
      return {
        ...state,
        data: state.data.filter((d, i) => i !== action.payload),
        loading: false,
        error: undefined,
      };
    case 'DELETE_DRIVERS_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};

export const stages = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_STAGES_REQUEST':
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case 'FETCH_STAGES_COMPLETE':
      return {
        ...state,
        data: [...action.payload],
        loading: false,
        error: undefined,
      };
    case 'FETCH_STAGES_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    case 'DELETE_STAGES_REQUEST':
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case 'DELETE_STAGES_COMPLETE':
      return {
        ...state,
        data: state.data.filter((d, i) => {
          console.log(d, i, action.payload)
          return i !== action.payload
        }),
        loading: false,
        error: undefined,
      };
    case 'DELETE_STAGES_ERROR':
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
};
