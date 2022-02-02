const initialState = {
  missions: [],
};

export const fetchMission = (payload) => ({
  type: 'FETCH_MISSIONS',
  payload,
});

const url = 'https://api.spacexdata.com/v3/missions';

export const missionFromApi = () => async (dispatch) => {
  const request = await fetch(url);
  const response = await request.json();
  dispatch(fetchMission(response));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MISSIONS':
      return {
        missions: action.payload,
      };
    case 'JOIN_MISSION': {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return { missions: newState };
    }
    case 'LEAVE_MISSION': {
      const newState = state.missions.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: false };
        }
        return mission;
      });
      return { missions: newState };
    }

    default:
      return state;
  }
};

export default reducer;
