// Criar Inputs diferentes
// Mudar para formulario de registro

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ButtonGreyWhite, ButtonPrimary } from "../../Button";
import GeneralInput from "../../Input";
import {
  Container,
  FooterForm,
  InputsContainer,
  SpanPassword,
  SpanText,
} from "./styles";

interface ILogin {
  email?: string;
  password?: string;
}

const FormSingIn: React.FC = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Nome é obrigatório")
      .matches(/^[ a-zA-Z á]*$/, "Deve conter apenas letras"),
    email: yup
      .string()
      .required("Email é obrigatório")
      .email("Formato de email inválido"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: ILogin) => {
    console.log(data);
  };

  return (
    <Container onSubmit={handleSubmit(handleLogin)}>
      <h1>Login</h1>
      <InputsContainer>
        <GeneralInput
          label="Nome"
          register={register}
          name={"name"}
          error={errors.name?.message}
          placeholder="Seu nome..."
        />
        <GeneralInput
          label="Usuário"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Digitar usuário"
        />
        <GeneralInput
          label="Senha"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Digitar senha"
        />
      </InputsContainer>
      <SpanPassword>
        <span>Esqueci minha senha</span>
      </SpanPassword>
      <FooterForm>
        <ButtonPrimary>Entrar</ButtonPrimary>
        <SpanText>Ainda não tem uma conta?</SpanText>
        <ButtonGreyWhite>Cadastrar</ButtonGreyWhite>
      </FooterForm>
    </Container>
  );
};

export default FormSingIn;
