import HomeComponent from '@/components/common/home.component';
import LayoutComponent from '@/components/common/layout.component';
import AdminAssignedPageComponent from '@/components/admin/assigned/assigned.page.component';
import AdminTicketPageComponent from '@/components/admin/ticket/ticket.page.component';
import AdminUserPageComponent from '@/components/admin/user/user.page.component';
import NotFoundComponent from '@/components/common/not-found.component';
import SignInComponent from '@/components/common/sign-in.component';
import {Route, Routes} from 'react-router-dom';

export function AppRouter() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LayoutComponent/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route path='/tickets' element={<AdminTicketPageComponent/>}/>
                    <Route path='/tickets-assigned' element={<AdminAssignedPageComponent/>}/>
                    <Route path='/users' element={<AdminUserPageComponent/>}/>
                </Route>
                <Route path='/login' element={<SignInComponent/>}/>
                <Route path='*' element={<NotFoundComponent/>}/>
            </Routes>
        </div>
    );

}
