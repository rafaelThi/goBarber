import React from 'react';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import GlobalStyle from './styles/global';

import { AuthProvider } from './hooks/AuthContext';

const App: React.FunctionComponent = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>

    <GlobalStyle />
  </>
);
export default App;
