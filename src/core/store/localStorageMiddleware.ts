export const REDUX_STATE_TOKEN = "reduxStateToken";

const localStorageMiddleware = store => next => action => {
  next(action);

  const state = store.getState()?.globalSettings;
  localStorage.setItem(REDUX_STATE_TOKEN, JSON.stringify(state));
};

export default localStorageMiddleware;