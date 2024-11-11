import QuizResult from '../Components/Result';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useGetQuizResultQuery } from '../redux/quiz';
import React, { useEffect, useState } from 'react';
import { IQuiz, IResult } from '../types';
import LoadingComponent from '../Components/Loading';

const ResultPage = () => {
    const navigate = useNavigate();
    const { quizId } = useParams();
    const { state } = useLocation();
    const [quiz, setQuiz] = useState<IQuiz | null>(null);
    const [result, setResult] = useState<IResult | null>(null);
    const { data, isLoading, isError, error } = useGetQuizResultQuery(quizId as string);

    useEffect(() => {
        if (!quiz && state) setQuiz(state.quiz);
    }, [quiz, state]);

    useEffect(() => {
        if (data && !isLoading && !isError) setResult(data);
    }, [data, isLoading, isError]);

    if (isError && error) {
        navigate('/error', { state: { error: error } });
    }

    if (!result || !quiz) {
        return <LoadingComponent />;
    }

    return <QuizResult result={result as IResult} quiz={quiz} />;
};

export default ResultPage;
