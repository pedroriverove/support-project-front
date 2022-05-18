import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '@/components/footer.component';
import NavbarComponent from '@/components/navbar.component';

const LayoutComponent = () => {
    return (
        <>
            <NavbarComponent />
            <Outlet />
            <FooterComponent />
        </>
    );
};

export default LayoutComponent;
