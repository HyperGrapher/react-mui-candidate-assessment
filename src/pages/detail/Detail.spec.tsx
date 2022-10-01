import {render, screen, waitFor} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import Detail from './Detail';

describe('Detail.tsx Test Suite', () => {

    
    it("should assert document title as expected", async () => {
        render(<Router><HelmetProvider><Detail /></HelmetProvider></Router>);
        await waitFor( () => expect(document.title).toEqual("Payment Detail"))

    });

});
