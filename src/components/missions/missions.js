/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { missionFromApi } from '../../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.missionsReducer.missions);
  const missions = Object.values(data);

  useEffect(() => {
    dispatch(missionFromApi());
  }, []);
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
            return (
              <tr key={mission.mission_id} className="pb-5">
                <td>{mission.mission_name}</td>
                <td>{mission.description}</td>
                <td>
                  <span>memberStatus</span>
                </td>
                <td>
                  <button id={mission.mission_id} type="button" >memberAction</button>
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