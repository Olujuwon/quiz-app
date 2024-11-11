import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
    return (
        <div className={`w-full mx-auto h-full relative bg-[color:var(--color-bgII)] font-inter lg:h-lvh`}>
            <Header />
            <div
                className={`w-3/4 h-dvh bg-[color:var(--color-bg)] mx-auto mt-3 rounded-lg lg:max-w-screen-lg sm:h-5/6`}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
