import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';
import getValidationError from '../../Utils/getValidationError';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string().required('Digite um e-mail válido.')
          .email(`Digite um e-mail válido
           "ex@ex.com".`),
        password: Yup.string().required().min(6, 'Senha invalida'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err.inner);

      formRef.current?.setErrors(getValidationError(err));
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>
        <a href="login">
          <FiLogIn />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
