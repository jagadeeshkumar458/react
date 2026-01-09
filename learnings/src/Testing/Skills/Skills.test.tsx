import {logRoles, render, screen} from '@testing-library/react';
import Skills from './Skills';

describe('Skills',() => {
    const skills = [`HTML`, `CSS`, `JavaScript`];
    test('renders correctly', () => {
        render(<Skills skills={skills} />);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders list of skills', () => {
        render(<Skills skills={skills} />);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    })

    test('renders login button', () => {
        render(<Skills skills={skills} />);
        const buttonElement = screen.getByRole('button', {name: /login/i});
        expect(buttonElement).toBeInTheDocument();
    })

    test('start lending button is not rendered', () => {
        render(<Skills skills={skills} />);
        const buttonElement = screen.queryByRole('button', {name: /start lending/i});
        expect(buttonElement).not.toBeInTheDocument();
    })

    test('start leaning button is eventually rendered', async () => {
        const view = render(<Skills skills={skills} />);
        logRoles(view.container);
        // screen.debug();
        const buttonElement = await screen.findByRole('button', {name: /start learning/i}, {timeout: 2000});
        // screen.debug();
        expect(buttonElement).toBeInTheDocument();
    })
})