import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterComponent from '@/components/common/footer.component';
import NavbarComponent from '@/components/common/navbar.component';

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
