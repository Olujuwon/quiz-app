import React from 'react';

import UserIcon from '../assets/user-01.svg';
import { BodyText, LargeHeaderTextBold } from './Typography';

interface IUser {
    name: string;
    imageUrl: string | null;
}

const useGetAuthUser = (): IUser => {
    return {
        name: 'Quiz taker',
        imageUrl: null,
    };
};

const Header: React.FC = () => {
    const { name, imageUrl } = useGetAuthUser();
    return (
        <div className={`w-full px-4 py-1.5 flex justify-between bg-[color:var(--color-bg)] shadow-md`}>
            <LargeHeaderTextBold className={`w-32 self-center text-[color:var(--color-main)]`} >Quiz App</LargeHeaderTextBold>
            <span className={`flex gap-x-3 items-center`}>
                <span
                    className={`rounded-full border border-[color:var(--color-icons-border)] p-2 bg-[color:var(--color-icons-bg)] text-[color:var(--color-icons)]`}
                >
                    <img
                        src={imageUrl ? imageUrl : UserIcon}
                        alt={'auth-user-icon'}
                        className={`w-4 h-4 rounded-full`}
                    />
                </span>
                <span className={`flex gap-x-2 items-center`}>
                    <BodyText>{name}</BodyText>
                    <span className={`text-[color:var(--color-dark)]`}>
                        <p className={`text-[1rem] pb-2`}>&#x2304;</p>
                    </span>
                </span>
            </span>
        </div>
    );
};

export default Header;
