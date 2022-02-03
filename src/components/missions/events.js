export const joinMission = (payload) => ({
  type: 'JOIN_MISSION',
  payload,
});

export const leaveMission = (payload) => ({
  type: 'LEAVE_MISSION',
  payload,
});

export const buttonClass = (joined) => {
  let classes = 'btn btn-block btn-outline-';
  classes += joined ? 'danger' : 'dark';
  return classes;
};

export const badgeClass = (joined) => {
  let classes = 'badge bg-';
  classes += joined ? 'info' : 'secondary';
  return classes;
};