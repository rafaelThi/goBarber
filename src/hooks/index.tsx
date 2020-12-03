import React from 'react';

import { AuthProvider } from './AuthHook';
import { ToastProvider } from './ToastHook';

export const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);
