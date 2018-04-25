import {Action, Dispatch, Middleware, MiddlewareAPI} from 'redux';

export const callAPIMiddleware = ({
                                    dispatch,
                                    getState,
                                  }) => (next) => (action) => {
  const {
    types,
    api,
    shouldCallAPI = () => true,
    actionPayload = {},
    onSuccess = () => {
    },
    onFailure = () => {
    },
    jsonToPayload = (json => json),
  } = action;

  if (!types) {
    // Normal action: pass it on
    return next(action);
  }

  if (
    !Array.isArray(types) ||
    types.length !== 3 ||
    !types.every((type) => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
  }

  const [requestType, completeType, errorType] = types;

  if (!shouldCallAPI(getState())) {
    dispatch({actionPayload, type: completeType});
    onSuccess();
    return;
  }

  // Usually for loading action
  dispatch({actionPayload, type: requestType});

  return api()
    .then(
      (json) => {
        const payload = jsonToPayload(json);
        let type = completeType;
        if (json.statusCode >= 400) {
          type = errorType;
          onFailure();
        } else {
          onSuccess(payload);
        }
        return dispatch({
          type,
          actionPayload,
          payload,
        });
      },
      (error) => {
        onFailure();
        return dispatch({
          type: errorType,
          actionPayload,
          error: error.message,
        });
      },
    );
};
