import PrimaryButton from '../primaryButton/PrimaryButton';
import './rocket.scss';

const Rocket = ({ rocket }) => {
  return (
    <li className="rocket">
      <img
        className="rocket__image"
        src={rocket.flickr_images[0]}
        alt={`Rocket ${rocket.rocket_name}`}
      />
      <h2 className="rocket__name">{rocket.rocket_name}</h2>
      <p className="rocket__description">{rocket.description}</p>
      <PrimaryButton unactive type="button">
        Reserve Rocket
      </PrimaryButton>
    </li>
  );
};

export default Rocket;
