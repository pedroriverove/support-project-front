import Home from '@/components/Home';
import Layout from '@/components/Layout';
import NotFound from '@/components/NotFound';
import SignIn from '@/components/SignIn';
import Ticket from '@/components/Ticket';
import User from '@/components/User';
import {
    Route,
    Routes
} from 'react-router-dom';

export function AppRouter(){

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/users' element={<User />} />
                    <Route path='/tickets' element={<Ticket />} />
                </Route>
                <Route path='/login' element={<SignIn />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );

}
