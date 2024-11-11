import React, { useMemo } from 'react';
import { SmallBodyTextBold } from './Typography';
import { IAnswers, IChoices, IQuestion } from '../types';
import { primaryBaseStyle } from './Buttons';

interface IRadioButtonProps {
    checked: boolean;
    value: string;
    label: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IChoiceProps {
    choices: IChoices;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    answers: IAnswers[];
    questionId: string;
}

interface IQuestionProps extends IChoiceProps {
    questionObject: IQuestion;
    isCorrect?: boolean;
}

const labelAttributeBaseStyle = `peer-checked:text-[color:var(--color-icons)] peer-checked:bg-[color:var(--color-bgII)] 
hover:bg-[color:var(--color-main)]`;

const buttonsContainerBaseStyle = `flex flex-col gap-y-2 items-center lg:flex-row lg:gap-x-4`;

const RadioButton: React.FC<IRadioButtonProps> = ({ checked, value, label, onChange }) => {
    return (
        <div className={`w-full flex `}>
            <input
                type="radio"
                id={'radio-button-' + label}
                className={`hidden peer`}
                checked={checked}
                value={value}
                onChange={onChange}
                readOnly={!onChange}
            />
            <label htmlFor={'radio-button-' + label} className={`${primaryBaseStyle} ${labelAttributeBaseStyle}`}>
                {label}
            </label>
        </div>
    );
};

const CheckButton: React.FC<IRadioButtonProps> = ({ checked, value, label, onChange }) => {
    return (
        <div className={`w-full flex `}>
            <input
                type="checkbox"
                id={'checkbox-' + label}
                className={`hidden peer`}
                checked={checked}
                value={value}
                onChange={onChange}
                readOnly={!onChange}
            />
            <label htmlFor={'checkbox-' + label} className={`${primaryBaseStyle} ${labelAttributeBaseStyle}`}>
                {label}
            </label>
        </div>
    );
};

export const SingleChoice: React.FC<IChoiceProps> = ({ choices, answers, onChange, questionId }) => {
    const keys = Object.keys(choices);
    const labels = Object.values(choices);

    const CHECKED = useMemo(() => {
        const answerExists = answers.find((answer) => answer.questionId === questionId);
        return answerExists ? answerExists.answers[0] : '';
    }, [answers, questionId]);

    return (
        <div className={`${buttonsContainerBaseStyle}`} data-testid="singlechoice-container">
            {keys.map((key, idx) => {
                return (
                    <RadioButton
                        key={key}
                        checked={key === CHECKED}
                        value={key}
                        label={labels[idx]}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
};

export const MultiChoice: React.FC<IChoiceProps> = ({ choices, answers, onChange, questionId }) => {
    const keys = Object.keys(choices);
    const labels = Object.values(choices);

    const CHECKED = useMemo(() => {
        const answerExists = answers.find((answer) => answer.questionId === questionId);
        return answerExists ? answerExists.answers[0] : '';
    }, [answers, questionId]);

    return (
        <div className={`${buttonsContainerBaseStyle}`} data-testid="multichoice-container">
            {keys.map((key, idx) => {
                return (
                    <CheckButton
                        key={key}
                        checked={key === CHECKED}
                        value={key}
                        label={labels[idx]}
                        onChange={onChange}
                    />
                );
            })}
        </div>
    );
};

const Question: React.FC<IQuestionProps> = ({ questionObject, choices, answers, questionId, onChange, isCorrect }) => {
    const { question, answerType } = questionObject;
    return (
        <div className={`my-2 bg-[color:var(--color-question-container)]`}>
            <div
                className={`py-2.5 pl-2 ${!isCorrect ? 'bg-[color:var(--color-icons-bg)]' : 'bg-[color:var(--color-right)]'} rounded`}
            >
                <SmallBodyTextBold>{question ? question : ''}</SmallBodyTextBold>
            </div>
            <div className={`py-2 lg:py-6`}>
                {answerType === 'SINGLE' ? (
                    <SingleChoice choices={choices} answers={answers} onChange={onChange} questionId={questionId} />
                ) : (
                    <MultiChoice choices={choices} answers={answers} onChange={onChange} questionId={questionId} />
                )}
            </div>
        </div>
    );
};

export default Question;
