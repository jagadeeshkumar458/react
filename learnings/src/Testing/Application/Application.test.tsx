import { render, screen } from "@testing-library/react"
import Application from "./Application"


describe('Application', () => {
    test('Renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {level: 1, name: /application form/i});
        expect(pageHeading).toBeInTheDocument();
        
        const sectionHeading = screen.getByRole('heading', {level: 2, name: /fill the form below to apply/i});
        expect(sectionHeading).toBeInTheDocument();

        const paraElement = screen.getByText(/all fields are mandatory/i);
        expect(paraElement).toBeInTheDocument();

        const closeElement = screen.getByTitle(/close/i);
        expect(closeElement).toBeInTheDocument();

        const imgElement = screen.getByAltText(/placeholder image/i);
        expect(imgElement).toBeInTheDocument();

        const customElement = screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {name: /username/i});
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText(/username/i, {selector: 'input'});
        expect(nameElement2).toBeInTheDocument();

        const nameElement3 = screen.getByPlaceholderText(/full name/i);
        expect(nameElement3).toBeInTheDocument();

        const nameElement4 = screen.getByDisplayValue(/Jagadeesh/i);
        expect(nameElement4).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {name: /bio/i});
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText(/I agree to the terms and conditions/i);
        expect(termsElement2).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })
})