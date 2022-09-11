import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { useAuctionRegister } from "../../../Providers/Auction/register";

import GeneralInput from "../Components/Inputs/GeneralInput";
// import MaskInput from "../Components/Inputs/MaskInput";
import { ButtonOutline2, ButtonPrimary } from "../../Button";
import { SelectTypeSale, SelectTypeVehicle } from "../Components/SelectType";

import * as S from "./styles";

import { IDataAuction } from "../../../interfaces/auction";

const AuctionForm: React.FC = () => {
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

  const [typeSale, setTypeSale] = useState("sale");
  const [typeVehicle, setTypeVehicle] = useState("car");

  const { registerAuction } = useAuctionRegister();

  const handleRegister = async (data: IDataAuction) => {
    await registerAuction({
      ...data,
      type: typeSale,
      typeVehicle: typeVehicle,
    });
  };

  return (
    <S.ContainerForm>
      <h1>Criar Anuncio</h1>

      <S.InputsContainer>
        <S.SpanText>Tipo de anuncio</S.SpanText>
        <SelectTypeSale value={typeSale} setValue={setTypeSale} />

        <S.SpanText>Informações do veiculo</S.SpanText>
      </S.InputsContainer>
    </S.ContainerForm>
  );
};

export default AuctionForm;
