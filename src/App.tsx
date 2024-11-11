import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Components/Layout';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import ErrorPage from './pages/ErrorPage';
import NotFound from './Components/NotFound';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<QuizPage />} />
                <Route path="/result/:quizId" element={<ResultPage />} />
                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
