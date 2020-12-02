import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro :(</strong>
          <p>Não foi possivel logar na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast hasDescription={false} type="success">
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro :(</strong>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
      <Toast hasDescription={false} type="error">
        <FiAlertCircle />
        <div>
          <strong>Aconteceu um erro :(</strong>
          <p>Não foi possivel logar na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;