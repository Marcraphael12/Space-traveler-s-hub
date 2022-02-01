import {
  fetchRockets,
  fetchRocketsFailure,
  fetchRocketsSuccess,
} from './rockets';

export const fetchRocketsAsync = () => async (dispatch) => {
  dispatch(fetchRockets());

  try {
    const res = await fetch('https://api.spacexdata.com/v3/rockets');
    if (!res.ok) throw new Error(res.status);

    const rockets = await res.json();
    dispatch(fetchRocketsSuccess(rockets));
  } catch (err) {
    console.error(err);
    dispatch(fetchRocketsFailure());
  }
};
