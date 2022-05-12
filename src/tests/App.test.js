import { render, screen } from '@testing-library/react';
import App from '../App';
import Filterer from '../components/Filterer.jsx'

test('on initial render, the search inputs are rendered', () => {
  render(<App />);
  const nameSearchElement = screen.getByPlaceholderText(/search by name/i);
  const tagSearchElement = screen.getByPlaceholderText(/search by tag/i);
  expect(nameSearchElement).toBeInTheDocument();
  expect(tagSearchElement).toBeInTheDocument();
});

test('Filterer filters', () => {
  const criteria = (el) => el < 10
  const arr = [1, 2, 3, 4, 14, 5, 64, 3, 6, 34, 3, 5, 3, 21, 2, 5, 6, 7, 8]
  const ReturnElementOne = ({ el, }) => (<span> {el}</span>)
  render(<Filterer criteria={criteria} arr={arr} ReturnElement={ReturnElementOne} />)
  const filtered = screen.getAllByText((/^\d$/))
  expect(filtered.length).toBeLessThanOrEqual(15)
})

