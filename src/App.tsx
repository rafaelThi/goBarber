import React from 'react';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import GlobalStyle from './styles/global';

const App: React.FunctionComponent = () => (
  <>
    <SignUp />

    <GlobalStyle />
  </>
);
export default App;
