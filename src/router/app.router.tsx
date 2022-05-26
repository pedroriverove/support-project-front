import AdminTicketPageComponent from '@/components/admin/ticket/ticket.page.component';
import AdminUserPageComponent from '@/components/admin/user/user.page.component';
import AssignedTicketsPageComponent from '@/components/dev/assigned-tickets/assigned-tickets.page.component';
import AssignedUsersPageComponent from '@/components/admin/assigned-users/assigned-users.page.component';
import HomeComponent from '@/components/common/home.component';
import LayoutComponent from '@/components/common/layout.component';
import NotFoundComponent from '@/components/common/not-found.component';
import SignInComponent from '@/components/auth/sign-in.component';
import {Route, Routes} from 'react-router-dom';

export function AppRouter() {

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LayoutComponent/>}>
                    <Route index element={<HomeComponent/>}/>
                    <Route path='/assigned-tickets' element={<AssignedTicketsPageComponent/>}/>
                    <Route path='/assigned-users' element={<AssignedUsersPageComponent/>}/>
                    <Route path='/tickets' element={<AdminTicketPageComponent/>}/>
                    <Route path='/users' element={<AdminUserPageComponent/>}/>
                </Route>
                <Route path='/login' element={<SignInComponent/>}/>
                <Route path='*' element={<NotFoundComponent/>}/>
            </Routes>
        </div>
    );

}
