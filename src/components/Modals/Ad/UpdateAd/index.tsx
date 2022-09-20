import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { useAuctionRegister } from "../../../../Providers/Auction/register";

import GeneralInput from "../../../Forms/Components/Inputs/GeneralInput";
import {
  ButtonDisable,
  ButtonNegative,
  ButtonPrimaryDisable,
  ButtonPrimaryOpacity,
} from "../../../Button";
import {
  SelectTypePublished,
  SelectTypeSale,
  SelectTypeVehicle,
} from "../../../Forms/Components/SelectType";

import * as S from "./styles";

import { IAuctionRes, IDataAuction } from "../../../../interfaces/auction";

import { CloseModalBtn } from "../../../Button/CloseModalBtn";
import TextArea from "../../../Forms/Components/TextArea";
import InputFile from "../../../Forms/Components/Inputs/InputFile";

interface IProps {
  handleModal: () => void;
  announce: IAuctionRes;
}

const UpdateAd: React.FC<IProps> = ({ handleModal, announce }) => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
    year: yup
      .string()
      .required("Campo obrigatório")
      .test(
        (dateString) =>
          new Date(dateString!) < new Date(new Date().getFullYear())
      ),
    km: yup.number().typeError("Somente números").required("Campo obrigatório"),
    price: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [typeSale, setTypeSale] = useState(announce.type || "sale");
  const [isActive, setIsActive] = useState(announce.isActive ? "yes" : "no");
  const [typeVehicle, setTypeVehicle] = useState(announce.typeVehicle || "car");

  const handleRegister = async (data: IDataAuction) => {
    console.log(data);
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleRegister)}>
        <S.TopModal>
          <h1>Editar Anúncio</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>

        <S.InputsContainer>
          <S.SpanText>Tipo de anuncio</S.SpanText>
          <SelectTypeSale value={typeSale} setValue={setTypeSale} />

          <S.SpanText>Publicação</S.SpanText>
          <SelectTypePublished value={isActive} setValue={setIsActive} />

          <S.SpanText>Informações do veiculo</S.SpanText>
          <GeneralInput
            label="Título"
            register={register}
            name={"title"}
            error={errors.title?.message}
            placeholder="Digitar título"
          />
          <S.RowInputsContainer>
            <GeneralInput
              label="Ano"
              register={register}
              name={"year"}
              error={errors.year?.message}
              placeholder="Digitar ano"
            />
            <GeneralInput
              label="Quilometragem"
              register={register}
              name={"km"}
              error={errors.km?.message}
              placeholder="0"
            />
            <GeneralInput
              label="Preço"
              register={register}
              name={"price"}
              error={errors.price?.message}
              placeholder="Digitar preço"
            />
          </S.RowInputsContainer>

          <TextArea
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.description?.message}
            placeholder="Digitar descrição"
          />

          <S.SpanText>Tipo do veiculo</S.SpanText>
          <SelectTypeVehicle value={typeVehicle} setValue={setTypeVehicle} />
        </S.InputsContainer>
        <S.BottoModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Excluir anúncio
          </ButtonNegative>
          <ButtonPrimaryDisable type="submit">
            Salvar alterações
          </ButtonPrimaryDisable>
        </S.BottoModal>
      </S.ContainerForm>
    </S.Centralize>
  );
};

export default UpdateAd;
