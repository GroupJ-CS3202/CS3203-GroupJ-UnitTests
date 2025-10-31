import { render, screen } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

// mock Chart.js to avoid  jest error when there is no chart
jest.mock('react-chartjs-2', () => ({
  Doughnut: () => <div>Mock Doughnut Chart</div>,
}));

test('renders dashboard summary correctly', () => {
  render(<App />);

  // check the expected catergory exist on dashboard
  expect(screen.getByText(/TotalExpense/i)).toBeInTheDocument();
  expect(screen.getByText(/totalIncome/i)).toBeInTheDocument();
  expect(screen.getByText(/totalLeft/i)).toBeInTheDocument();

  // check if the '+' sign exist so that user able to add data
  expect(screen.getByText(/\+/)).toBeInTheDocument();
});
