import HomeComponent from '@/components/common/home.component';
import LayoutComponent from '@/components/common/layout.component';
import NotFoundComponent from '@/components/common/not-found.component';
import SignInComponent from '@/components/common/sign-in.component';
import AdminTicketPageComponent from '@/components/admin/ticket.page.component';
import AdminTicketAssignedComponent from '@/components/admin/ticket.assigned.component';
import { Route, Routes } from 'react-router-dom';

export function AppRouter(){

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LayoutComponent />} >
                    <Route index element={<HomeComponent />} />
                    <Route path='/tickets' element={<AdminTicketPageComponent />} />
                    <Route path='/tickets-assigned' element={<AdminTicketAssignedComponent />} />
                </Route>
                <Route path='/login' element={<SignInComponent />} />
                <Route path='*' element={<NotFoundComponent />} />
            </Routes>
        </div>
    );

}
