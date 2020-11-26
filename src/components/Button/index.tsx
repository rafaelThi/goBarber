import React, { ButtonHTMLAttributes } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Container } from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  ...rest
}) => (
  <Container type="button" {...rest}>
    {children}
  </Container>
);

export default Button;
