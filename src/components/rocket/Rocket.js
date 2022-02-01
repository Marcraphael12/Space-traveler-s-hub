import { useDispatch } from 'react-redux';
import { cancelReservation, reserveRocket } from '../../redux/rockets/rockets';
import PrimaryButton from '../primaryButton/PrimaryButton';
import './rocket.scss';

const Rocket = ({
  rocket: { id, flickr_images, rocket_name, description, reserved },
}) => {
  const dispatch = useDispatch();

  const handleRocketReserve = () => dispatch(reserveRocket(id));
  const handleRocketCancelReservation = () => dispatch(cancelReservation(id));

  return (
    <li className="rocket">
      <img
        className="rocket__image"
        src={[flickr_images]}
        alt={`Rocket ${rocket_name}`}
      />
      <h2 className="rocket__name">{rocket_name}</h2>
      <p className="rocket__description">{description}</p>
      {reserved ? (
        <PrimaryButton
          unactive
          type="button"
          onClick={handleRocketCancelReservation}
        >
          Cancel Reservation
        </PrimaryButton>
      ) : (
        <PrimaryButton type="button" onClick={handleRocketReserve}>
          Reserve Rocket
        </PrimaryButton>
      )}
    </li>
  );
};

export default Rocket;
