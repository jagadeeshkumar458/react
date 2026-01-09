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

    test('sets count to 10 after clicking set button with input value 10', async () => {
        render(<Counter />);
        const inputElement = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', {name: 'Set Count'});
        const countElement = screen.getByRole('heading');
        await user.type(inputElement, '10');
        await user.click(setButton);
        expect(countElement).toHaveTextContent('10');
    });

    test('elements are focused in correct order when tabbing', async () => {
        render(<Counter />);
        const incrementButton = screen.getByRole('button', {name: 'Increment'});
        const inputElement = screen.getByRole('spinbutton');
        const setButton = screen.getByRole('button', {name: 'Set Count'});

        await user.tab();
        expect(incrementButton).toHaveFocus();

        await user.tab();
        expect(inputElement).toHaveFocus();

        await user.tab();
        expect(setButton).toHaveFocus();
    });
})