/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { missionFromApi } from '../../redux/missions/missions';

const joinMission = (payload) => ({
  type: 'JOIN_MISSION',
  payload,
});

const leaveMission = (payload) => ({
  type: 'LEAVE_MISSION',
  payload,
});

const Missions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missionsReducer.missions);
  const missions = Object.values(data);

  useEffect(() => {
    dispatch(missionFromApi());
  }, []);

  const btnClass = (joined) => {
    let classes = 'btn btn-block btn-outline-';
    classes += joined ? 'danger' : 'dark';
    return classes;
  };

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
            <th scope="col" style={{ width: '66%' }}>Description </th>
            <th scope="col" style={{ width: '12%' }}>Status</th>
            <th scope="col" style={{ width: '12%' }}>Join</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => {
            const btn = btnClass(mission.joined);
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
                <td>{mission.description}</td>
                <td>
                  <span>{memberStatus}</span>
                </td>
                <td>
                  <button id={mission.mission_id} type="button" className={btn} onClick={handleMission}>{memberAction}</button>
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