export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;

export const isFetchingReducer = (constants, prefix) =>
  createReducer(false, {
    [constants[prefix + "_REQUEST"]]: (state, action) => true,
    [constants[prefix + "_SUCCESS"]]: (state, action) => false,
    [constants[prefix + "_FAILURE"]]: (state, action) => false
  });

export const errorReducer = (constants, prefix) =>
  createReducer(null, {
    [constants[prefix + "_REQUEST"]]: (state, action) => null,
    [constants[prefix + "_SUCCESS"]]: (state, action) => null,
    [constants[prefix + "_FAILURE"]]: (state, action) => action.payload
  });

export const expirationReducer = (constants, prefix) =>
  createReducer(0, {
    [constants[prefix + "_SUCCESS"]]: (state, action) => new Date().getTime(),
    [constants[prefix + "_FAILURE"]]: (state, action) => 0
  });
