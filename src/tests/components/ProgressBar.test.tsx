import React from 'react';
import { render, screen } from '@testing-library/react';

import ProgressBar from '../../Components/ProgressBar';

test('Renders progress bar correctly', () => {
    render(<ProgressBar value={5} max={100} />);
    const progressBarElement = screen.getByLabelText('quiz-progress');
    const progressBarText = screen.getByText('5/100 questions remaining');
    expect(progressBarText).toBeInTheDocument();
    expect(progressBarElement).toHaveValue(5);
});
