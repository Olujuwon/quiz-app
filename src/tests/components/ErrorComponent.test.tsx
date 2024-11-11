import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ErrorComponent from '../../Components/ErrorComponent';

describe('ErrorComponent', () => {
    it('renders error status, message, and buttons with correct links', () => {
        const status = '500';
        const message = 'Internal Server Error';
        render(
            <MemoryRouter>
                <ErrorComponent status={status} message={message} />
            </MemoryRouter>
        );
        expect(screen.getByText('500')).toBeInTheDocument();
        expect(screen.getByText('Internal Server Error')).toBeInTheDocument();
        expect(screen.getByText('Exit')).toBeInTheDocument();
        expect(screen.getByText('Restart quiz')).toBeInTheDocument();
    });
});
