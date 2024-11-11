import { useGetTestQuizQuery, useSubmitQuizAnswersMutation } from '../redux/quiz';
import { useEffect, useState } from 'react';
import { IAnswers, IQuiz } from '../types';

const useQuiz = () => {
    const { data, isLoading, isError, error } = useGetTestQuizQuery({});
    const [submitQuizAnswers] = useSubmitQuizAnswersMutation();
    const [quiz, setQuiz] = useState<IQuiz | null>(null);
    const [answers, setAnswers] = useState<IAnswers[]>([]);

    useEffect(() => {
        if (data && !isLoading && !isError) setQuiz(() => data);
    }, [data, isLoading, isError]);

    return { quiz, setQuiz, answers, setAnswers, submitQuizAnswers, error, isError };
};

export default useQuiz;
