import RocketsList from '../../components/rockets-list/RocketsList';
import './my-profile.scss';

const MyProfile = () => {
  return (
    <section className="my-profile container">
      <h1>MyProfile</h1>
      <RocketsList />
    </section>
  );
};

export default MyProfile;
