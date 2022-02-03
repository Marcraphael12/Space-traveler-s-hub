import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Missions from '../missions/missions';

describe('Display the missions list', () => {
  it('Renders correctly every missions from the API', () => {
    const mission = {
      id: 2,
      mission_name: 'one',
      description: 'a mission',
      joined: true,
    };
    const missions = TestRenderer.create(
      <Provider store={store}>
        <Missions key={mission.id} missions={mission} />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});