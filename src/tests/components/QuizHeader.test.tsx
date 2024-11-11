import React from 'react';
import { render, screen } from '@testing-library/react';

import QuizHeader from '../../Components/QuizHeader';

test('Renders Quiz header correctly', () => {
    const quizHeaderTitle = 'Theme quiz test';
    render(<QuizHeader title={quizHeaderTitle} />);
    const quizTitle = screen.getByText(quizHeaderTitle);
    const themeQuizIcon = screen.getByTestId('svg-quiz-theme-icon');
    expect(quizTitle).toBeInTheDocument();
    expect(themeQuizIcon).toBeInTheDocument();
});
