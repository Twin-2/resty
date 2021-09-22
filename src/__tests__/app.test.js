import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from '../app';

test('our app should load and contain some data', async () => {
    render(<App />);
    const name = await waitFor(() => screen.getByTestId('method'));
    expect(name).toHaveTextContent('Request Method')
})
