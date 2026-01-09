import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import Counter from './Counter';

describe('Counter', () => {
    test('renders correctly', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        expect(incrementButton).toBeInTheDocument();
    });

    test('renders with initial count of 0', () => {
        render(<Counter />);
        const countElement = screen.getByRole('heading');
        expect(countElement).toHaveTextContent('0');
    });

    test('increments count by 1 when increment button is clicked', async () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        const countElement = screen.getByRole('heading');
        await user.click(incrementButton);
        expect(countElement).toHaveTextContent('1');
    });

    test('renders a count of 2 after clicking increment button twice', async () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        const countElement = screen.getByRole('heading');
        await user.click(incrementButton);
        await user.click(incrementButton);
        expect(countElement).toHaveTextContent('2');
    });
})