import { IQuiz, IResult } from '../types';
import React from 'react';
import QuizHeader from './QuizHeader';
import Question from './Question';
import Button from './Buttons';
import { SmallBodyTextBold } from './Typography';
import { useNavigate } from 'react-router-dom';

interface IQuizResultProps {
    result: IResult;
    quiz: IQuiz;
}

const QuizResult: React.FC<IQuizResultProps> = ({ result, quiz }) => {
    const navigate = useNavigate();
    const userAnswers = result.resultDetails.map((detail) => ({
        questionId: detail.questionId,
        answers: [detail.userAnswer],
    }));
    return (
        <div className={`w-full h-auto`}>
            <QuizHeader title={quiz.quizName} />
            <hr className={`mt-2 mb-6 mx-8`} />
            <div className={`w-[90%] mx-auto mt-10`}>
                {quiz ? (
                    quiz.questions.map((question, idx) => {
                        const { choices, id } = question;
                        const { isCorrect } = result.resultDetails[idx];
                        return (
                            <Question
                                questionObject={question}
                                key={idx}
                                choices={choices}
                                answers={userAnswers}
                                questionId={id}
                                isCorrect={isCorrect}
                            />
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
            <div className={`w-[90%] mx-auto mt-5 2xl:mt-10`}>
                <span className={`flex text-center p-2 gap-x-4`}>
                    <SmallBodyTextBold>{'Total Score :'}</SmallBodyTextBold>
                    <SmallBodyTextBold>{`${result.totalScore}`}</SmallBodyTextBold>
                </span>
                <span className={`flex text-center p-2 gap-x-4`}>
                    <SmallBodyTextBold>{'Your score :'}</SmallBodyTextBold>
                    <SmallBodyTextBold>{`${result.userScore}`}</SmallBodyTextBold>
                </span>
            </div>
            <div className={'px-3 mx-auto mt-6 mb-4 flex justify-end items-end 2xl:mt-5 sm:px-8'}>
                <div className={'w-full flex space-x-4 lg:w-1/3'}>
                    <Button type="link" onClick={() => navigate('/')}>
                        Exit
                    </Button>
                    <Button type="primary" icon={<>&#8594;</>} onClick={() => navigate('/')}>
                        Restart quiz
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuizResult;
