const initialState = {
  missions: [],
};

export const fetchMission = (payload) => ({
  type: 'FETCH_MISSIONS',
  payload,
});

export const missionFromApi = () => async (dispatch) => {
  const request = await fetch('https://api.spacexdata.com/v3/missions');
  const response = await request.json();
  dispatch(fetchMission(response));
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return {
        missions: action.payload,
      };
    default:
      return state;
  }
};