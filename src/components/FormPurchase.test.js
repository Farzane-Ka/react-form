import FormPurchase from "./FormPurchase";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Form check', () => {
    test('renders card number', () => {
        render(<FormPurchase/>);

        const cardNumberElement = screen.getByText('Card number', {exact: false});
        expect(cardNumberElement).toBeInTheDocument();
    })

    test('validity is checked ', () => {
        render(<FormPurchase/>);

        const buttonElement = screen.getByRole('Button');
        userEvent.click(buttonElement);

        const ccvElement = screen.getByText('Please enter 3 digits ccv', {exact:true});
        expect(ccvElement).toBeInTheDocument();
    })
})
