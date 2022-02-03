import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Rockets from '../../pages/rockets/Rockets';
import { fetchRocketsAsync } from '../../redux/rockets/thunk';

test('Should render the rocket elements', async () => {
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>
  );
  await waitFor(() => {
    expect(screen.getByText('Falcon 9')).toBeEnabled();
  });
});
