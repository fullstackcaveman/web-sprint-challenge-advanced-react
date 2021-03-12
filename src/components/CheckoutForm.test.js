import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import userEvent from '@testing-library/user-event';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />);
});

test('form shows success message on submit with form details', async () => {
	render(<CheckoutForm />);

	const firstName = 'Testy';
	const lastName = 'Tester';
	const address = '123 This Street';
	const city = 'This City';
	const state = 'MT';
	const zip = '12345';

	const firstNameInput = screen.getByLabelText('First Name:');
	userEvent.type(firstNameInput, firstName);

	const lastNameInput = screen.getByLabelText('Last Name:');
	userEvent.type(lastNameInput, lastName);

	const addressInput = screen.getByLabelText('Address:');
	userEvent.type(addressInput, address);

	const cityInput = screen.getByLabelText('City:');
	userEvent.type(cityInput, city);

	const stateInput = screen.getByLabelText('State:');
	userEvent.type(stateInput, state);

	const zipInput = screen.getByLabelText('Zip:');
	userEvent.type(zipInput, zip);

	const checkoutBtn = screen.getByRole('button');
	userEvent.click(checkoutBtn);

	const success = screen.getByRole('img');
	expect(success).toBeInTheDocument();

	const pName = screen.getByText(`${firstName} ${lastName}`);
	expect(pName).toBeInTheDocument();

	const pAddress = screen.getByText(address);
	expect(pAddress).toBeInTheDocument();

	const pCityStZip = screen.getByText(`${city}, ${state} ${zip}`);
	expect(pCityStZip).toBeInTheDocument();
});
