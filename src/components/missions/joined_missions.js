import React from 'react';
import { useSelector } from 'react-redux';
import './missions.scss';

const JoinedMissions = () => {
  const data = useSelector((state) => state.missionsReducer.missions);

  return (
    <div className='missions-list'>
			<h2>Joined missions</h2>
      <ul className="missions-list__missions">
      {!data.length && (
          <li className="missions-list__mission text-disabled">
            No mission reserved...
          </li>
        )}
        {data.filter((mission) => mission.joined).map((mission) => (
          <div key={mission.mission_id}>
            <li className="missions-list__mission">{mission.mission_name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default JoinedMissions;