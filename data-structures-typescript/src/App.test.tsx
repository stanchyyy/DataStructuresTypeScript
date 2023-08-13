import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const arrayText = screen.getByText("Responsive drawer");
  expect(arrayText).toBeInTheDocument();
});
