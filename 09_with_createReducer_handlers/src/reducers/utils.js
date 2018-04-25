export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  if (handlers.hasOwnProperty(action.type)) return handlers[action.type](state, action);
  return state;
};

// this creates default handlers for *_REQUEST, *_ERROR, *_FETCH_COMPLETE, *_DELETE_COMPLETE action types
export const createDefaultHandlers = (actions, stateSlice) =>
  Object.keys(actions).reduce(
    (handlers, action) => {
      if (action.indexOf('_REQUEST') > -1) {
        handlers[action] = (state) => ({
          ...state,
          loading: true,
          error: null,
        });
      } else if (action.indexOf('_ERROR') > -1) {
        handlers[action] = (state, { error }) => ({
          ...state,
          loading: false,
          error,
        });
      } else if (action.indexOf('_FETCH_COMPLETE') > -1) {
        handlers[action] = (state, { payload },) => ({
          ...state,
          loading: false,
          data: payload ? [...payload] : [...state.data],
          lastFetched: Date.now(),
        });
      } else if (action.indexOf('_DELETE_COMPLETE') > -1) {
        handlers[action] = (state, { payload },) => ({
          ...state,
          loading: false,
          data: state.data.filter(
            (d, i) => payload !== i,
          ),
        });
      }
      return handlers;
    },
    {},
  );
