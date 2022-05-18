import HomeComponent from '@/components/home.component';
import LayoutComponent from '@/components/layout.component';
import NotFoundComponent from '@/components/not-found.component';
import SignInComponent from '@/components/sign-in.component';
import TicketComponent from '@/components/ticket.component';
import UserComponent from '@/components/user.component';
import {
    Route,
    Routes
} from 'react-router-dom';

export function AppRouter(){

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<LayoutComponent />} >
                    <Route index element={<HomeComponent />} />
                    <Route path='/users' element={<UserComponent />} />
                    <Route path='/tickets' element={<TicketComponent />} />
                </Route>
                <Route path='/login' element={<SignInComponent />} />
                <Route path='*' element={<NotFoundComponent />} />
            </Routes>
        </div>
    );

}
