import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  // essa parte executa no inicio
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarer');
    const user = localStorage.getItem('@GoBarer');

    if (token && user) {
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', {
      email,
      password,
    });
    const { token, user } = response.data;

    localStorage.setItem('@GoBarer', token);
    localStorage.setItem('@GoBarer', JSON.stringify(user));
    setData({ token, user }); // como o estado ja foi criado, para preencher o token e o user
  }, []);
  return (
    <AuthContext.Provider value={{ name: 'Rafael', signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
