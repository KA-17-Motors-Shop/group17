import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { ButtonOutline2, ButtonPrimary } from "../../Button";
import GeneralInput from "../../Input/GeneralInput";
import { Container, FooterForm, InputsContainer, SpanText } from "./styles";
import InputPassword from "../../Input/InputPassword";
import SelectType from "./SelectType";
import { useState } from "react";

interface IRegister {
  email?: string;
  password?: string;
  name?: string;
  cpf?: string;
  phone?: string;
  birhtDate?: string;
  description?: string;
  zipCode?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
  confirmPassword?: string;
}

const FormSingUp: React.FC = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo obrigatório")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    cpf: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    phone: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^\d{2} \d{2} \d{4,5}-\d{4}$/, "Telefone inválido"),
    birhtDate: yup
      .string()
      .required("Campo obrigatório")
      .test((dateString) => new Date(dateString!) < new Date()),
    description: yup.string(),
    password: yup.string().required("Campo obrigatório"),
    zipCode: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^[0-9]{5}-[0-9]{3}$/, "CEP inválido"),
    state: yup
      .string()
      .required("Campo obrigatório")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
    city: yup
      .string()
      .required("Campo obrigatório")
      .matches(/[a-zA-Z\u00C0-\u00FF ]+/i, "Deve conter apenas letras"),
    street: yup.string().required("Campo obrigatório"),
    number: yup
      .number()
      .typeError("Somente números")
      .required("Campo obrigatório"),
    complement: yup.string(),
    confirmPassword: yup
      .string()
      .required("Confirmação obrigatória")
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data: IRegister) => {
    console.log({ ...data, typeAccount });
  };

  const [typeAccount, setTypeAccount] = useState("client");

  return (
    <Container onSubmit={handleSubmit(handleRegister)}>
      <h1>Cadastro</h1>
      <InputsContainer>
        <SpanText>Informações de usuário</SpanText>
        <GeneralInput
          label="Nome"
          register={register}
          name={"name"}
          error={errors.name?.message}
          placeholder="Seu nome..."
        />
        <GeneralInput
          label="E-mail"
          register={register}
          name={"email"}
          error={errors.email?.message}
          type="email"
          placeholder="Digitar usuário"
        />
        <GeneralInput
          label="CPF"
          register={register}
          name={"cpf"}
          error={errors.cpf?.message}
          placeholder="Seu CPF..."
        />
        <GeneralInput
          label="Celular"
          register={register}
          name={"phone"}
          error={errors.phone?.message}
          placeholder="Seu telefone..."
        />
        <GeneralInput
          label="Data de nascimento"
          type="date"
          register={register}
          name={"birhtDate"}
          error={errors.birhtDate?.message}
          placeholder="Sua data de nascimento..."
        />
        <GeneralInput
          label="Descrição"
          register={register}
          name={"description"}
          error={errors.description?.message}
          placeholder="Descrição..."
        />
        <SpanText>Informações de endereço</SpanText>
        <GeneralInput
          label="CEP"
          register={register}
          name={"zipCode"}
          error={errors.zipCode?.message}
          placeholder="CEP..."
        />
        <GeneralInput
          label="Estado"
          register={register}
          name={"state"}
          error={errors.state?.message}
          placeholder="Estado..."
        />
        <GeneralInput
          label="Cidade"
          register={register}
          name={"city"}
          error={errors.city?.message}
          placeholder="Cidade..."
        />
        <GeneralInput
          label="Rua"
          register={register}
          name={"street"}
          error={errors.street?.message}
          placeholder="Rua..."
        />
        <GeneralInput
          label="Número"
          register={register}
          name={"number"}
          error={errors.number?.message}
          placeholder="Número..."
          type="number"
        />
        <GeneralInput
          label="Complemento"
          register={register}
          name={"complement"}
          error={errors.complement?.message}
          placeholder="Complemento..."
        />
        <SpanText>Tipo de conta</SpanText>
        <SelectType value={typeAccount} setValue={setTypeAccount} />
        <InputPassword
          label="Senha"
          register={register}
          name={"password"}
          error={errors.password?.message}
          placeholder="Digitar senha"
        />
        <InputPassword
          label="Confimar Senha"
          register={register}
          name={"Confirmpassword"}
          error={errors.Confirmpassword?.message}
          placeholder="Confirmar senha"
        />
      </InputsContainer>
      <FooterForm>
        <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
        <SpanText>Já possuí uma conta?</SpanText>
        <ButtonOutline2 type="button">Login</ButtonOutline2>
      </FooterForm>
    </Container>
  );
};

export default FormSingUp;
