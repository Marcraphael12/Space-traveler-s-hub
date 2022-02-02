/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { missionFromApi } from '../../redux/missions/missions';
import { buttonClass, badgeClass, joinMission, leaveMission } from './events';
import './missions.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missionsReducer.missions);
  const missions = Object.values(data);

  useEffect(() => {
    dispatch(missionFromApi());
  }, []);

  const handleMission = (e) => {
    if (e.target.textContent === 'Leave mission') {
      dispatch(leaveMission(e.target.id));
    } else {
      dispatch(joinMission(e.target.id));
    }
  };
  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col" style={{ width: '10%' }}>Mission</th>
            <th scope="col" style={{ width: '60%' }}>Description </th>
            <th scope="col" style={{ width: '15%' }}>Status</th>
            <th scope="col" style={{ width: '15%' }}>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => {
            const button = buttonClass(mission.joined);
            const badge = badgeClass(mission.joined);
            let memberStatus;
            let memberAction;
            if (mission.joined) {
              memberAction = 'Leave mission';
              memberStatus = 'Active member';
            } else {
              memberAction = 'Join mission';
              memberStatus = 'NOT A MEMBER';
            }
            return (
              <tr key={mission.mission_id} className="pb-5">
                <td>{mission.mission_name}</td>
                <td className="pb-4">{mission.description}</td>
                <td>
                  <span className={badge}>{memberStatus}</span>
                </td>
                <td>
                  <button id={mission.mission_id} type="button" style={{ padding: '10px' }} className={button} onClick={handleMission}>{memberAction}</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;