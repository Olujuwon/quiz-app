import React, { FC } from 'react';
import { SmallBodyText } from './Typography';

interface IProgressBarProps {
    value: number;
    max: number;
}

const ProgressBar: FC<IProgressBarProps> = ({ value, max }) => {
    return (
        <div className={`w-full flex justify-between items-center`}>
            <progress
                aria-label="quiz-progress"
                max={max}
                value={value}
                className={`w-full h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg 
                    [&::-webkit-progress-bar]:bg-[color:var(--color-bgII)] [&::-webkit-progress-value]:bg-gradient-to-r 
                    from-[#965af8] to-[color:var(--color-main)] [&::-moz-progress-bar]:bg-[color:var(--color-bgII)] xl:w-5/6`}
            />
            <SmallBodyText
                className={`text-[color:var(--color-main)] hidden !text-xs font-semibold xl:inline-block`}
            >{`${value}/${max} questions remaining`}</SmallBodyText>
            <SmallBodyText
                className={`text-[color:var(--color-main)] font-semibold !text-xs xl:hidden`}
            >{`${value}/${max}`}</SmallBodyText>
        </div>
    );
};

export default ProgressBar;
