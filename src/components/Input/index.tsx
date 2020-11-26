import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { Container } from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FunctionComponent<InputProps> = ({ icon: Icon, ...res }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input {...res} />
  </Container>
);

export default Input;
