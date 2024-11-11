import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnswers } from '../types';

export const quizApi = createApi({
    reducerPath: 'quizApi',
    tagTypes: ['quiz', 'result'],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BACKEND_HOST,
        prepareHeaders: (headers: Headers) => {
            const token = process.env.REACT_APP_SAMPLE_AUTH_TOKEN;
            if (!headers.has('Authorization') && token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => {
        return {
            getTestQuiz: builder.query({
                query: () => ({
                    url: `user/quiz/random`,
                    method: 'GET',
                    params: { themeId: '63a88cf1e774d167cd92c06f' },
                }),
                providesTags: ['quiz'],
            }),
            getQuizResult: builder.query({
                query: (quizId: string) => ({
                    url: `user/quiz/${quizId}/result`,
                    method: 'GET',
                }),
                providesTags: ['result'],
            }),
            submitQuizAnswers: builder.mutation({
                query: ({ answers, quizId }: { answers: IAnswers[]; quizId: string }) => ({
                    url: `user/quiz/${quizId}/submit`,
                    method: 'POST',
                    body: answers,
                }),
                invalidatesTags: ['quiz'],
            }),
        };
    },
});

export const { useGetTestQuizQuery, useGetQuizResultQuery, useSubmitQuizAnswersMutation } = quizApi;

export const { endpoints, reducerPath, reducer, middleware } = quizApi;
