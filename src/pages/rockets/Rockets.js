import './rockets.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from '../../components/rocket/Rocket';
import { fetchRocketsAsync } from '../../redux/rockets/thunk';

const Rockets = () => {
  const rockets = useSelector((state) => state.rocketsReducer.rockets);
  const isLoading = useSelector((state) => state.rocketsReducer.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    !rockets.length && dispatch(fetchRocketsAsync());
  }, [dispatch]);

  return (
    <section className="rockets container">
      <ul className="rockets__list">
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          rockets.map((rocket) => <Rocket key={rocket.id} rocket={rocket} />)
        )}
      </ul>
    </section>
  );
};

export default Rockets;
