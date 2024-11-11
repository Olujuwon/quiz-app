import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { IAnswers, IQuestion, IQuiz } from '../../types';
import Question from '../../Components/Question';

export const sampleQuiz: IQuiz = {
    quizId: '63b2eb294d9a591eddbcfa71',
    quizName: 'Theme quiz test',
    imageUrl: 'https://www.google.com',
    iconUrl: 'https://www.google.com',
    questions: [
        {
            id: '63280f8cf4a73e5f0e362086',
            question: 'What do you call a person or an organization that lends money?',
            choices: {
                '1': 'Creditor',
                '2': 'Debtor',
                '3': 'Investor',
                '4': 'None of the above',
            },
            answerType: 'SINGLE',
            points: 1,
        },
        {
            id: '62f219f8443d8a3ed1528a93',
            question: 'Bitcoin is created as a reward for a process known as?',
            choices: {
                '1': 'Wallet',
                '2': 'Blockchain',
                '3': 'Mining',
                '4': 'Bubble',
            },
            answerType: 'SINGLE',
            points: 1,
        },
    ],
};

describe('Question Component', () => {
    const mockOnChange = jest.fn();

    const questionOneObject: IQuestion = sampleQuiz.questions[0];

    const questionTwoObject: IQuestion = sampleQuiz.questions[1];

    const answers: IAnswers[] = [{ questionId: '63280f8cf4a73e5f0e362086', answers: ['1'] }];

    test('should render the question text', () => {
        render(
            <Question
                questionObject={questionOneObject}
                choices={questionOneObject.choices}
                answers={[]}
                questionId={questionOneObject.id}
                onChange={mockOnChange}
            />
        );

        const questionElement = screen.getByText(questionOneObject.question);
        expect(questionElement).toBeInTheDocument();
    });

    test('should render radio buttons for SINGLE choice questions', () => {
        render(
            <Question
                questionObject={questionOneObject}
                choices={questionOneObject.choices}
                answers={[]}
                questionId="q1"
                onChange={mockOnChange}
            />
        );

        const radioButtons = screen.getAllByRole('radio');
        expect(radioButtons).toHaveLength(4);

        const optionOneRadio = screen.getByLabelText(questionOneObject.choices['1']);
        expect(optionOneRadio).toBeInTheDocument();
        expect(optionOneRadio).not.toBeChecked();
    });

    test('should check the correct radio button if answer exists', () => {
        render(
            <Question
                questionObject={questionOneObject}
                choices={questionOneObject.choices}
                answers={answers}
                questionId={questionOneObject.id}
                onChange={mockOnChange}
            />
        );

        const optionOneRadio = screen.getByLabelText(questionOneObject.choices['1']);
        expect(optionOneRadio).toBeChecked();
    });

    test('should call onChange when a radio button is clicked', () => {
        render(
            <Question
                questionObject={questionOneObject}
                choices={questionOneObject.choices}
                answers={[]}
                questionId={questionOneObject.id}
                onChange={mockOnChange}
            />
        );

        const radioFirstOption = screen.getByLabelText(questionOneObject.choices[1]);
        fireEvent.click(radioFirstOption);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.any(Object)); // Event is passed
    });
});
