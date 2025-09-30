import { render, screen } from '@testing-library/react';
import Header from '../components/Header';


test('render header with brand', () => {
render(<Header />);
expect(screen.getByRole('link', { name: /lacrei saúde - início/i })).toBeInTheDocument();
});