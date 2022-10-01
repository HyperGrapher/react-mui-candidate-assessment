import {render, screen, waitFor} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';

describe('Home.tsx Test Suite', () => {

    
    it("should assert document title as expected", async () => {
        render(<Router><HelmetProvider><Home /></HelmetProvider></Router>);
        await waitFor( () => expect(document.title).toEqual("Due Payments"))

    });

});
