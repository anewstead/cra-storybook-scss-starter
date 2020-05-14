import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders react text', () => {
  const { getByText } = render(<App />);
  const testElement = getByText('This is a React App');
  expect(testElement).toBeInTheDocument();
});
