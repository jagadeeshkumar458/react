import { render, screen } from "@testing-library/react"
import Application from "./Application"


describe('Application', () => {
    test('Renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {level: 1, name: /application form/i});
        expect(pageHeading).toBeInTheDocument();
        
        const sectionHeading = screen.getByRole('heading', {level: 2, name: /fill the form below to apply/i});
        expect(sectionHeading).toBeInTheDocument();
        
        const nameElement = screen.getByRole('textbox', {name: /username/i});
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {name: /bio/i});
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    })
})