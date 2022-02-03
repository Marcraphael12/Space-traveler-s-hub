import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import JoinedMissions from '../missions/joined_missions';

describe('Render the missions list in profile page', () => {
  it('Renders all joined missions correctly into the profile page', () => {
    const missions = TestRenderer.create(
      <Provider store={store}>
        <JoinedMissions />
      </Provider>,
    ).toJSON();
    expect(missions).toMatchSnapshot();
  });
});