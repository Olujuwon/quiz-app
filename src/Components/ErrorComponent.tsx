import React from 'react';
import { MediumBodyText, MediumHeaderTextBold } from './Typography';
import Button from './Buttons';
import { useNavigate } from 'react-router-dom';

interface IErrorComponentProps {
    status: string;
    message: string;
}

const ErrorComponent: React.FC<IErrorComponentProps> = ({ status, message }) => {
    const navigate = useNavigate();
    return (
        <div className={'w-full '}>
            <div className={'flex flex-col text-center p-8'}>
                <MediumHeaderTextBold className="text-[color:var(--color-main)] font-bold">
                    {'An Error has occurred!'}
                </MediumHeaderTextBold>
                <MediumBodyText className="text-[color:var(--color-main)]">{status}</MediumBodyText>
                <MediumBodyText className="text-[color:var(--color-main)]">{message}</MediumBodyText>
            </div>
            <div className={'w-5/6 mx-auto flex justify-center'}>
                <Button type="link" onClick={() => navigate('/')}>
                    Exit
                </Button>
                <Button type="primary" icon={<>&#8594;</>} onClick={() => navigate('/')}>
                    Restart quiz
                </Button>
            </div>
        </div>
    );
};

export default ErrorComponent;
