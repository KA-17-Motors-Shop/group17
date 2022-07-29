import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import ButtonPrimary from "../../Button";
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
          label="Email"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Enter email..."
        />
        <GeneralInput
          label="Password"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Enter password..."
        />
      </InputsContainer>
      <SpanPassword>
        <span>Esqueci minha senha</span>
      </SpanPassword>
      <FooterForm>
        <ButtonPrimary>Entrar</ButtonPrimary>
        <SpanText>Ainda não tem uma conta?</SpanText>
        <ButtonPrimary>Cadastrar</ButtonPrimary>
      </FooterForm>
    </Container>
  );
};

export default FormSingIn;
