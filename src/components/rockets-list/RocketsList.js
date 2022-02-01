import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketsAsync } from '../../redux/rockets/thunk';
import './rockets-list.scss';

const RocketsList = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const dispatch = useDispatch();

  useEffect(
    () => !rockets.length && dispatch(fetchRocketsAsync()),
    [dispatch, rockets.length]
  );

  return (
    <div className="rockets-list">
      <h2>My rockets</h2>
      <ul className="rockets-list__rockets">
        {rockets.map((rocket) => (
          <li className="rockets-list__rocket">{rocket.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsList;
