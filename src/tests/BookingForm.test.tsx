import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import BookingForm from '../components/BookingForm';


test('shows validation errors when submitting empty', async () => {
render(<BookingForm />);
fireEvent.click(screen.getByRole('button', { name: /confirmar/i }));
await waitFor(() => expect(screen.getByText(/Informe a data|Informe seu nome|E-mail inválido/)).toBeInTheDocument());
});
