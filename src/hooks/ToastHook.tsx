import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/ToastContainer/index';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(): void;
}

export interface ToastMessage {
  id: string;
  type?: 'info' | 'error' | 'success';
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessage] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, description }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };
      setMessage(state => [...state, toast]);
    },
    [],
  );
  const removeToast = useCallback(() => {
    console.log('Remove Toast');
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
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
