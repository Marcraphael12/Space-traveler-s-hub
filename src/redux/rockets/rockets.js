const FETCH_ROCKETS = 'spaceTravelers/rockets/FETCH_ROCKETS';
const FETCH_ROCKETS_SUCCESS = 'spaceTravelers/rockets/FETCH_ROCKETS_SUCCESS';
const FETCH_ROCKETS_FAILURE = 'spaceTravelers/rockets/FETCH_ROCKETS_FAILURE';
const RESERVE_ROCKET = 'spaceTravelers/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'spaceTravelers/rockets/CANCEL_RESERVATION';

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

export const reserveRocket = (payload) => ({
  type: RESERVE_ROCKET,
  payload,
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
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
    case RESERVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) return rocket;
          return { ...rocket, reserved: true };
        }),
      };
    case CANCEL_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) return rocket;
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default reducer;
