import TestRenderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Header from '../header/Header';

describe('Render avigationr', () => {
  it('Displays correctly the header with the navigation bar', () => {
    const header = TestRenderer.create(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>,
    ).toJSON();
    expect(header).toMatchSnapshot();
  });
});