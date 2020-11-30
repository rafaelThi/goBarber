import React from 'react';
import SignIn from './pages/Signin/index';
import SignUp from './pages/Signup/index';
import GlobalStyle from './styles/global';
import AuthContext from './context/AuthContext';

const App: React.FunctionComponent = () => (
  <>
    <AuthContext.Provider value={{ name: 'Rafael' }}>
      <SignIn />
    </AuthContext.Provider>
    <GlobalStyle />
  </>
);
export default App;
