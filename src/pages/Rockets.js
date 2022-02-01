import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRocketsAsync } from '../redux/rockets/thunk';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const isLoading = useSelector((state) => state.rocketsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocketsAsync());
  }, []);

  return (
    <div>
      <h1>Rockets:</h1>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          rockets.map((rocket) => <li key={rocket.id}>{rocket.rocket_name}</li>)
        )}
      </ul>
    </div>
  );
};

export default Rockets;
