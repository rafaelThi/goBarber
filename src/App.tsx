import React from 'react';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import GlobalStyle from './styles/global';
import { AppProvider } from './hooks/index';

const App: React.FunctionComponent = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);
export default App;
