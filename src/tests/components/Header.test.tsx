import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../../Components/Header';

test('Renders Quiz taker from app header', () => {
    render(<Header />);
    const companyLogo = screen.getByText('Quiz App');
    const AuthUserIcon = screen.getByAltText('auth-user-icon');
    const headerText = screen.getByText(/Quiz taker/i);
    const downCaret = screen.getByText(/⌄/i);
    expect(companyLogo).toBeInTheDocument();
    expect(AuthUserIcon).toBeInTheDocument();
    expect(downCaret).toBeInTheDocument();
    expect(headerText).toBeInTheDocument();
});
