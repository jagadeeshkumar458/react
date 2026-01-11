import { render, screen } from '@testing-library/react';
import Users from './user';

describe('Users Component', () => {
    test('renders correctly', () => {
        render(<Users />);
        const headingElement = screen.getByRole('heading', {name: 'Users List'});
        expect(headingElement).toBeInTheDocument();
    });

    test('renders a list of users', async () => {
        render(<Users />);
        const users = await screen.findAllByRole('listitem');
        expect(users.length).toHaveLength(3);
    });
});