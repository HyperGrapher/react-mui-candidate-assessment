import { render, screen, waitFor, fireEvent, act } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Login from './Login';
import user from '@testing-library/user-event'

describe('Login.tsx Test Suite', () => {



    it("should assert document title as expected", async () => {
        render(<Router><HelmetProvider><Login /></HelmetProvider></Router>);
        await waitFor(() => expect(document.title).toEqual("Please Login"))

    });


    describe("Login Button", () => {


        it('in the component', () => {

            render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)
            const element = screen.getByText('Login');
            expect(element).toBeInTheDocument()

        })



        it('is disabled when no input exists', () => {

            render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)
            const button = screen.getByText('Login');
            expect(button).toHaveAttribute('disabled');

        })


        it('is disabled if password characters less than expected:(8) ', async () => {


            const { getByText } = render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)
            const button = screen.getByText('Login');
            const email = screen.getByLabelText('Email', { exact: false }) as HTMLInputElement;
            const password = screen.getByLabelText('Password', { exact: false }) as HTMLInputElement;

            user.type(email, 'some@email.com')
            user.type(password, '123456')

            expect(getByText('Login')).toBeDisabled();


        })




        it('is disabled if email is not valid ', () => {

            const { getByText, getByLabelText } = render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)

            const email = screen.getByLabelText('Email', { exact: false }) as HTMLInputElement;
            const password = screen.getByLabelText('Password', { exact: false }) as HTMLInputElement;

            user.type(email, 'some@email')
            user.type(password, '12345678')

            expect(getByLabelText('Email')).not.toBe('')
            expect(getByLabelText('Password')).not.toBe('')
            expect(getByText('Login')).toBeDisabled();
            expect(getByText('Login')).toHaveProperty('disabled', true)
            

        })


        it('is enabled if both fileds are valid ', async () => {

            const { getByText, getByLabelText } = render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)


            const email = screen.getByLabelText('Email', { exact: false }) as HTMLInputElement;
            const password = screen.getByLabelText('Password', { exact: false }) as HTMLInputElement;

            user.type(email, 'some@email.com')
            user.type(password, '123456789121212121243434343435656')

            
            expect(getByLabelText('Email')).not.toBe('')
            expect(getByLabelText('Password')).not.toBe('')
            expect(getByText('Login')).toHaveAttribute('disabled', "")
            

        })


    })



    it('should assert Email textfiled has label and in the document', () => {

        render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)
        const element = screen.getByLabelText('Email', { exact: false });
        expect(element).toBeInTheDocument()

    })


    it('should assert Password textfiled has label and in the document', () => {

        render(<Router><HelmetProvider><Login /></HelmetProvider></Router>)
        const element = screen.getByLabelText('Password', { exact: false });
        expect(element).toBeInTheDocument()

    })



});
