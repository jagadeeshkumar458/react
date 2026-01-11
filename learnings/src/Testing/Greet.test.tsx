import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet', () => {
    test('Renders Correctly', () => {
        render(<Greet />);
        const element = screen.getByText(/Hello/);
        expect(element).toBeInTheDocument();
    })

    test('renders with a name', () => {
        render(<Greet name = 'Jagadeesh'/>);
        const textElement = screen.getByText('Hello Jagadeesh');
        expect(textElement).toBeInTheDocument();
    })
})