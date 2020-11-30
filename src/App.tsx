import React from 'react';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import GlobalStyle from './styles/global';

const App: React.FunctionComponent = () => (
  <>
    <SignIn />

    <GlobalStyle />
  </>
);
export default App;
