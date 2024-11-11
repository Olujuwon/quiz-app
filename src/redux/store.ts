import { configureStore } from '@reduxjs/toolkit';
import { quizApi } from './quiz';

export const store = configureStore({
    reducer: {
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(quizApi.middleware),
});
