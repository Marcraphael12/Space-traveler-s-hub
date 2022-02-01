const FETCH_ROCKETS = 'spaceTravelers/rockets/FETCH_ROCKETS';
const FETCH_ROCKETS_SUCCESS = 'spaceTravelers/rockets/FETCH_ROCKETS_SUCCESS';
const FETCH_ROCKETS_FAILURE = 'spaceTravelers/rockets/FETCH_ROCKETS_FAILURE';

const intitalState = {
  rockets: [],
  isLoading: false,
};

export const fetchRockets = () => ({
  type: FETCH_ROCKETS,
});

export const fetchRocketsSuccess = (payload) => ({
  type: FETCH_ROCKETS_SUCCESS,
  payload,
});

export const fetchRocketsFailure = (payload) => ({
  type: FETCH_ROCKETS_FAILURE,
  payload,
});

const reducer = (state = intitalState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return { ...state, isLoading: true };
    case FETCH_ROCKETS_SUCCESS:
      return { isLoading: false, rockets: [...action.payload] };
    case FETCH_ROCKETS_FAILURE:
      return { isLoading: false, rockets: [] };
    default:
      return state;
  }
};

export default reducer;
