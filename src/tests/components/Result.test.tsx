import React from 'react';
import { render, screen } from '@testing-library/react';
import { IQuestion, IResult } from '../../types';
import { sampleQuiz } from './Question.test';
import { MemoryRouter } from 'react-router-dom';
import QuizResult from '../../Components/Result';

const sampleResult: IResult = {
    quizId: '63b2eb294d9a591eddbcfa71',
    quizName: 'Theme quiz test',
    totalScore: 2,
    userScore: 1,
    resultDetails: [
        {
            questionId: '63280f8cf4a73e5f0e362086',
            question: 'What do you call a person or an organization that lends money?',
            correctAnswer: '1',
            userAnswer: '2',
            isCorrect: false,
        },
        {
            questionId: '62f219f8443d8a3ed1528a93',
            question: 'Bitcoin is created as a reward for a process known as?',
            correctAnswer: '3',
            userAnswer: '3',
            isCorrect: true,
        },
    ],
};

describe('Result Component', () => {
    const questionOneObject: IQuestion = sampleQuiz.questions[0];

    const questionTwoObject: IQuestion = sampleQuiz.questions[1];

    test('renders the quiz title', () => {
        render(
            <MemoryRouter>
                <QuizResult quiz={sampleQuiz} result={sampleResult} />
            </MemoryRouter>
        );

        expect(screen.getByText(questionOneObject.question)).toBeInTheDocument();
        expect(screen.getByText(questionTwoObject.question)).toBeInTheDocument();

        expect(screen.getByLabelText(questionOneObject.choices['1'])).toBeInTheDocument();
        expect(screen.getByLabelText(questionTwoObject.choices['2'])).toBeInTheDocument();
    });

    test('displays the total and user score', () => {
        render(
            <MemoryRouter>
                <QuizResult quiz={sampleQuiz} result={sampleResult} />
            </MemoryRouter>
        );

        expect(screen.getByText('Total Score :')).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
        expect(screen.getByText('Your score :')).toBeInTheDocument();
        expect(screen.getByText('1')).toBeInTheDocument();
    });

    test('renders Exit and Restart quiz buttons', () => {
        render(
            <MemoryRouter>
                <QuizResult quiz={sampleQuiz} result={sampleResult} />
            </MemoryRouter>
        );

        const exitButton = screen.getByText('Exit');
        expect(exitButton).toBeInTheDocument();
        const restartButton = screen.getByText('Restart quiz');
        expect(restartButton).toBeInTheDocument();
    });
});
