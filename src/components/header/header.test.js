import { render, screen } from '@testing-library/react';
import Header from './header';

//Tällä testillä voi testata, sisältääkö header eli koko ohjelman otsikko oikean tekstin, joka on Kulukirjanpito.

test('renders header with text', () => {
  render(<Header />);
  const text = screen.getByText(/Kulukirjanpito/i);
  expect(text).toBeInTheDocument();
});
