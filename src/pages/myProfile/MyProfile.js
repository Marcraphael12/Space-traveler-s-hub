import RocketsList from '../../components/rockets-list/RocketsList';
import JoinedMissions from '../../components/missions/joined_missions';
import './my-profile.scss';

const MyProfile = () => { return (
    <section className="my-profile container">
      <JoinedMissions />
      <RocketsList />
    </section>
  );
};

export default MyProfile;
