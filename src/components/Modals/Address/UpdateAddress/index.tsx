import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import GeneralInput from "../../../Forms/Components/Inputs/GeneralInput";
import { ButtonNegative, ButtonPrimary } from "../../../Button";
import { CloseModalBtn } from "../../../Button/CloseModalBtn";
import MaskInput from "../../../Forms/Components/Inputs/MaskInput";
import { UpdateAddressSchema } from "../../../../validations/address.validations";

import * as S from "./styles";

import { useZipCode } from "../../../../Providers/Address/cepValidation";
import { useAddress } from "../../../../Providers/Address/listCreateAddress";
import { useCallback, useEffect, useState } from "react";
import { IAddressData, IResAddress } from "../../../../interfaces/address";

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

  const { findAddress } = useAddress();
  const { verifyZipCode } = useZipCode();

  const [defaultAddress, setDefaultAddress] = useState<IResAddress>({});

  const cepValidation = useCallback(
    async (value: string) => {
      await verifyZipCode(value);
    },
    [verifyZipCode]
  );

  const handleAddress = useCallback(async () => {
    const myAddress = await findAddress(id);
    setDefaultAddress(myAddress);
  }, [findAddress, id]);

  useEffect(() => {
    handleAddress();
  }, [handleAddress]);

  const handleRegister = async (data: IAddressData) => {
    console.log(data);
  };

  return (
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
          defaultValue={defaultAddress.zipCode}
          onChange={(e) => {
            cepValidation(e.target.value);
          }}
        />
        <S.RowInputsContainer>
          <GeneralInput
            label="Estado"
            register={register}
            name={"state"}
            error={errors.state?.message}
            placeholder="Estado..."
            defaultValue={defaultAddress.state}
          />
          <GeneralInput
            label="Cidade"
            register={register}
            name={"city"}
            error={errors.city?.message}
            placeholder="Cidade..."
            defaultValue={defaultAddress.city}
          />
        </S.RowInputsContainer>

        <GeneralInput
          label="Rua"
          register={register}
          name={"street"}
          error={errors.street?.message}
          placeholder="Rua..."
          defaultValue={defaultAddress.street}
        />
        <S.RowInputsContainer>
          <GeneralInput
            label="Número"
            register={register}
            name={"number"}
            error={errors.number?.message}
            placeholder="Número..."
            type="number"
            defaultValue={defaultAddress.number}
          />
          <GeneralInput
            label="Complemento"
            register={register}
            name={"complement"}
            error={errors.complement?.message}
            placeholder="Complemento..."
            defaultValue={defaultAddress.complement}
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
  );
};

export default UpdateAddress;
