import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page', () => {
  render(<App />);
  const arrayText = screen.getByText("Unresolved promises");
  expect(arrayText).toBeInTheDocument();
});
