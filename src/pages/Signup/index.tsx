import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={Logo} alt="GoBarber" />
      <form>
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
      </form>
      <a href="login">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignUp;
