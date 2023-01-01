import { render, screen } from '@testing-library/react';
import App from './App';

test('renders for the form', () => {
  render(<App />);
  const linkElement = screen.getByText(/card holder name/i);
  expect(linkElement).toBeInTheDocument();
});
