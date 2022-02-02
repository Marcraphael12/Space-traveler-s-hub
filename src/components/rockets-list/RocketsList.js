import { useSelector } from 'react-redux';
import './rockets-list.scss';

const RocketsList = () => {
  const rockets = useSelector((state) =>
    state.rocketsReducer.rockets.filter((rocket) => rocket.reserved)
  );

  return (
    <div className="rockets-list">
      <h2>My rockets</h2>
      <ul className="rockets-list__rockets">
        {!rockets.length && (
          <li className="rockets-list__rocket text-disabled">
            No rockets reserved...
          </li>
        )}
        {rockets.map((rocket) => (
          <li className="rockets-list__rocket">{rocket.rocket_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RocketsList;
