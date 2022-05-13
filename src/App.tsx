import React from 'react';
import '@/assets/css/app.css';
import Account from '@/components/Account';
import Home from '@/components/Home';
import Layout from '@/components/Layout';
import NotFound from '@/components/NotFound';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import User from '@/components/User';
import {
    Routes,
    Route
} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path='/users' element={<User />} />
                    <Route path='/tickets' element={<User />} />
                </Route>
                <Route path='/account' element={<Account />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<SignIn />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
