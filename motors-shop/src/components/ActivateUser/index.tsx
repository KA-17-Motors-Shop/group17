import { useState } from "react";
import GeneralInput from "../Input/GeneralInput";
import Modal from "../Modal";
import { ButtonActivate, ContainerModal, SpanContainer } from "./styles";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ActivateUserSpan: React.FC = () => {
  const [show, setShow] = useState<boolean>(false);

  const handle = () => {
    setShow(!show);
  };

  const schema = yup.object().shape({
    code: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleCode = (data: { code?: string }) => {
    console.log(data);
  };

  return (
    <>
      <Modal show={show} close={handle} height={"15rem"}>
        <ContainerModal>
          <h1>Insira o código enviado no seu e-mail</h1>
          <GeneralInput
            label="Código de ativação"
            register={register}
            name={"code"}
            error={errors.code?.message}
            placeholder="Digitar Código"
          />
          <ButtonActivate>Enviar e-mail novamente</ButtonActivate>
          <button onClick={handleSubmit(handleCode)}>Enviar</button>
        </ContainerModal>
      </Modal>
      <SpanContainer>
        <h1>Ative seu usuário</h1>
        <ButtonActivate onClick={handle}>Clique aqui</ButtonActivate>
      </SpanContainer>
    </>
  );
};
export default ActivateUserSpan;
