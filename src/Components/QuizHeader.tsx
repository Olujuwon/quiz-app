import React from 'react';
import { LargeHeaderTextBold } from './Typography';
import { ReactComponent as Puzzle } from '../assets/puzzle-piece-02.svg';

interface QuizHeaderProps {
    title: string;
    imageUrl?: string;
}

const iconBaseStyle = `w-6 h-6 rounded-full`;
const containerFlexStyle = `flex items-center`;

const QuizHeader: React.FC<QuizHeaderProps> = ({ title, imageUrl }) => {
    return (
        <div className={`${containerFlexStyle} gap-x-3 py-3 px-6`}>
            <span
                className={`rounded-full border border-[color:var(--color-icons-border)] p-3 bg-[color:var(--color-icons-bg)] text-[color:var(--color-icons)]`}
            >
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={'quiz-icon'}
                        className={`${iconBaseStyle}`}
                        data-testid="svg-quiz-theme-icon"
                    />
                ) : (
                    <Puzzle className={`${iconBaseStyle}`} data-testid="svg-quiz-theme-icon" />
                )}
            </span>
            <span className={`${containerFlexStyle} gap-x-2`}>
                <LargeHeaderTextBold>{title}</LargeHeaderTextBold>
            </span>
        </div>
    );
};

export default QuizHeader;
