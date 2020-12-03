import React, { createContext, useCallback, useContext } from 'react';

import ToastContainer from '../components/ToastContainer/index';

interface ToastContextData {
  addToast(): void;
  removeToast(): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const addToast = useCallback(() => {
    console.log('Add Toast');
  }, []);
  const removeToast = useCallback(() => {
    console.log('Remove Toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('Faltou oToastProvider por volta');
  }
  return context;
}
