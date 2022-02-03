import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import Rocket from '../rocket/Rocket';
import store from '../../redux/configureStore';

test('Render the active button', () => {
  render(
    <Provider store={store}>
      <Rocket rocket={{ reserved: false }} />
    </Provider>
  );

  expect(screen.getByRole('button', { name: 'Reserve Rocket' })).toBeEnabled();
});

test('Render the unactive button', async () => {
  render(
    <Provider store={store}>
      <Rocket rocket={{ reserved: true }} />
    </Provider>
  );

  expect(screen.getByText('Cancel Reservation')).toBeEnabled();
});
