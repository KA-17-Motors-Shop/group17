import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import GeneralInput from "../../../Forms/Components/Inputs/GeneralInput";
import { ButtonNegative, ButtonPrimary } from "../../../Button";
import { CloseModalBtn } from "../../../Button/CloseModalBtn";
import MaskInput from "../../../Forms/Components/Inputs/MaskInput";
import { UpdateAddressSchema } from "../../../../validations/address.validations";

import * as S from "./styles";

import { IDataAnnounce } from "../../../../interfaces/auction";
import { useZipCode } from "../../../../Providers/Address/cepValidation";

interface IHandleModal {
  handleModal: () => void;
  id: string;
}

const UpdateAddress = ({ handleModal, id }: IHandleModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UpdateAddressSchema),
  });

  const { verifyZipCode, address } = useZipCode();

  const handleRegister = async (data: IDataAnnounce) => {
    console.log(data);
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
        <S.TopModal>
          <h1>Editar endereço</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>

        <S.InputsContainer>
          <S.SpanText>Informações de endereço</S.SpanText>
          <MaskInput
            label="CEP"
            register={register}
            name={"zipCode"}
            error={errors.zipCode?.message}
            placeholder="CEP..."
            mask="99999-999"
            onChange={(e) => {
              verifyZipCode(e.target.value);
            }}
          />
          <S.RowInputsContainer>
            <GeneralInput
              label="Estado"
              register={register}
              name={"state"}
              error={errors.state?.message}
              placeholder="Estado..."
              defaultValue={address.uf}
            />
            <GeneralInput
              label="Cidade"
              register={register}
              name={"city"}
              error={errors.city?.message}
              placeholder="Cidade..."
              defaultValue={address.localidade}
            />
          </S.RowInputsContainer>

          <GeneralInput
            label="Rua"
            register={register}
            name={"street"}
            error={errors.street?.message}
            placeholder="Rua..."
            defaultValue={address.logradouro}
          />
          <S.RowInputsContainer>
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
              defaultValue={address.complemento}
            />
          </S.RowInputsContainer>
        </S.InputsContainer>
        <S.BottoModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Cancelar
          </ButtonNegative>
          <ButtonPrimary type="submit">Salvar alterações</ButtonPrimary>
        </S.BottoModal>
      </S.ContainerForm>
    </S.Centralize>
  );
};

export default UpdateAddress;
