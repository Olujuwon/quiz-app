import React from 'react';

import QuizHeader from '../Components/QuizHeader';
import ProgressBar from '../Components/ProgressBar';
import Question from '../Components/Question';
import Button from '../Components/Buttons';
import LoadingComponent from '../Components/Loading';

import { useNavigate } from 'react-router-dom';
import useQuiz from '../hooks/useQuiz';

const QuizPage = () => {
    const navigate = useNavigate();
    const { quiz, answers, setAnswers, submitQuizAnswers, error, isError } = useQuiz();

    if (isError && error) {
        navigate('/error', { state: { error: error } });
    }

    if (!quiz) {
        return <LoadingComponent />;
    }

    const handleSingleChoiceChange = (value: string, id: string) => {
        const newAnswer = { questionId: id, answers: [value] };
        setAnswers((prevState) => {
            const filteredAnswers = prevState.filter((answer) => answer.questionId !== id);
            return [...filteredAnswers, newAnswer];
        });
    };

    const handleContinueQuiz = async () => {
        if (quiz.questions.length === answers.length) {
            const submitQuery = await submitQuizAnswers({ answers, quizId: quiz.quizId });
            if (submitQuery.data) navigate('/result/' + quiz?.quizId, { state: { quiz: quiz } });
            else navigate('/error', { state: { error: submitQuery.error } });
        } else if (quiz.questions.length > answers.length) {
            alert('All questions must be answered!');
        } else {
            //Load next sets of questions
        }
    };

    return (
        <div className={`w-full h-auto`}>
            <QuizHeader title={quiz.quizName} />
            <hr className={`mt-2 mb-6 mx-8`} />
            <div className={`px-8`}>
                <ProgressBar max={quiz.questions.length} value={answers.length} />
            </div>
            <div className={`w-[90%] mx-auto mt-10`}>
                {quiz ? (
                    quiz.questions.map((question, idx) => {
                        const { choices, id } = question;
                        return (
                            <Question
                                questionObject={question}
                                key={idx}
                                choices={choices}
                                answers={answers}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                    handleSingleChoiceChange(event.currentTarget.value, id)
                                }
                                questionId={id}
                            />
                        );
                    })
                ) : (
                    <></>
                )}
            </div>
            <div className={'px-3 mx-auto mt-5  mb-4 flex justify-end items-end 2xl:mt-5 sm:px-8'}>
                <div className={'w-full flex space-x-4 lg:w-1/3'}>
                    <Button type="link" onClick={() => navigate('/')}>
                        End quiz and exit
                    </Button>
                    <Button type="primary" icon={<>&#8594;</>} onClick={handleContinueQuiz}>
                        Continue quiz
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
