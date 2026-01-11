import { render, screen } from '@testing-library/react';
import Users from './user';
import { server } from '../mocks/server';
import { rest } from 'msw';

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

    test('renders error', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(
                    ctx.status(500),
                    ctx.json({ message: 'Internal Server Error' })
                );
            })
        );
        
        render(<Users />);
        const errorMessage = await screen.findByText('error fetching users');
        expect(errorMessage).toBeInTheDocument();
    });
});