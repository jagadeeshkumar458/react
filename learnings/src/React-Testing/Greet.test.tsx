import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet Renders Correctly', () => {
    render(<Greet />);
    const element = screen.getByText(/Hello/i);
    expect(element).toBeInTheDocument();
})

test('Greet renders with a name', () => {
    render(<Greet name = 'Jagadeesh'/>);
    const textElement = screen.getByText('Hello Jagadeesh');
    expect(textElement).toBeInTheDocument();
})