import React from 'react';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer/index';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FunctionComponent = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);
export default App;
