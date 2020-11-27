import React, { useCallback } from 'react';
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';

import { Form } from '@unform/web';
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório.'),
        email: Yup.string().required().email('Digite um e-mail válido.'),
        password: Yup.string()
          .required()
          .min(6, 'Senha deve conter pelo menos 6 digitos.'),
      });

      await schema.validate(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={Logo} alt="GoBarber" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu Cadastro</h1>

          <Input icon={FiUser} name="name" type="text" placeholder="Nome" />

          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="login">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};
export default SignUp;
