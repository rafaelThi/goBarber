import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Toast } from './styles';
import { ToastMessage, useToast } from '../../../hooks/ToastHook';

interface ToastProps {
  message: ToastMessage;
}

const Toasts: React.FC<ToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  return (
    <Toast type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle />
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  );
};

export default Toasts;
