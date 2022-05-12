import React from 'react';
import Account from "./components/Account";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {
    Route,
    Routes
} from "react-router-dom";

function App() {
  return (
      <div className="">
          <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/account' element={<Account />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </div>
  );
}

export default App;
