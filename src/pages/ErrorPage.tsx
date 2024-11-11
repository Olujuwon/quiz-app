import React, { useEffect, useState } from 'react';

import ErrorComponent from '../Components/ErrorComponent';

import { useLocation } from 'react-router-dom';

interface IError {
    status: string;
    message: string;
    traceId?: string;
}

const defaultError: IError = {
    status: '404',
    message: 'Oopsiii! Page Not Found',
};

const ErrorPage = () => {
    const { state } = useLocation();
    const [errorObject, setErrorObject] = useState<IError | null>(null);

    useEffect(() => {
        if (!errorObject && state) setErrorObject(state.error);
    }, [errorObject, state]);

    if (!errorObject && !state) setErrorObject(() => defaultError);

    return <ErrorComponent status={errorObject?.status as string} message={errorObject?.message as string} />;
};

export default ErrorPage;
