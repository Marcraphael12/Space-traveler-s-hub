import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';
import PrimaryButton from '../primaryButton/PrimaryButton';
import './rocket.scss';

const Rocket = ({
  rocket: { id, flickr_images, rocket_name, description },
}) => {
  const dispatch = useDispatch();

  const handleRocketReserve = () => dispatch(reserveRocket(id));

  return (
    <li className="rocket">
      <img
        className="rocket__image"
        src={[flickr_images]}
        alt={`Rocket ${rocket_name}`}
      />
      <h2 className="rocket__name">{rocket_name}</h2>
      <p className="rocket__description">{description}</p>
      <PrimaryButton type="button" onClick={handleRocketReserve}>
        Reserve Rocket
      </PrimaryButton>
    </li>
  );
};

export default Rocket;
