export const GET_TIME = 'GET_TIME';
export const UPDATE_TIME = 'UPDATE_TIME';

export const TimeAction = ($q, timeService) => {
  'ngInject';
  const getTime = options => {
    return (dispatch, getState) => {
      const { time } = getState();

      if (options && !options.force && Object.keys(time).length) {
        return $q.when(time).then(() => dispatch({ type: GET_TIME, payload: time }));
      } else {
        return timeService.get().then(data => dispatch({ type: GET_TIME, payload: data }));
      }
    };
  };

  const updateTime = payload => {
    return dispatch => {
      return timeService.update(payload).then(data => dispatch({ type: UPDATE_TIME, payload: data }));
    };
  };

  return {
    getTime,
    updateTime
  };
};

export const time = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_TIME:
      return payload || state;
    case UPDATE_TIME:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};
