import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { useState } from "react";

import GeneralInput from "../../../Forms/Components/Inputs/GeneralInput";
import {
  ButtonDisable,
  ButtonNegative,
  ButtonPrimaryDisable,
  ButtonPrimaryOpacity,
} from "../../../Button";
import {
  SelectTypeSale,
  SelectTypeVehicle,
} from "../../../Forms/Components/SelectType";

import * as S from "./styles";

import { IAnnounceRes, IDataAnnounce } from "../../../../interfaces/auction";

import { CloseModalBtn } from "../../../Button/CloseModalBtn";
import TextArea from "../../../Forms/Components/TextArea";
import InputFile from "../../../Forms/Components/Inputs/InputFile";
import { useAnnounceUpdateDelete } from "../../../../Providers/Announces/updateDelete";
import { useLoad } from "../../../../Providers/Loading";

interface IProps {
  handleModal: () => void;
  announce: IAnnounceRes;
}

const UpdateAd: React.FC<IProps> = ({ handleModal, announce }) => {
  const schema = yup.object().shape({
    title: yup.string(),
    description: yup.string(),
    year: yup.number().typeError("Somente números"),
    km: yup.number().typeError("Somente números"),
    price: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [typeSale, setTypeSale] = useState(announce.type || "sale");
  const [typeVehicle, setTypeVehicle] = useState(announce.typeVehicle || "car");

  const { updateAnnounce } = useAnnounceUpdateDelete();
  const { showLoad } = useLoad();

  const [numberFiles, setNumbersFiles] = useState(1);
  const [files, setFiles] = useState<{ id: number; file: File }[]>([]);

  const handleUpdate = async (data: IDataAnnounce) => {
    const images = files.map((item) => {
      return item.file;
    });
    showLoad();
    await updateAnnounce(
      announce.id!,
      {
        ...data,
        type: typeSale,
        typeVehicle: typeVehicle,
      },
      images
    );
  };
  const addInputFile = () => {
    setNumbersFiles(numberFiles + 1);
  };

  const addFile = (index: number, file: File) => {
    const filesArr = files.find((item) => item.id === index);

    if (filesArr) {
      const data = [
        ...files.filter((item) => item.id !== index),
        { id: index, file },
      ];
      setFiles(data);
    } else {
      setFiles([...files, { id: index, file }]);
    }
  };

  return (
    <S.Centralize>
      <S.ContainerForm onSubmit={handleSubmit(handleUpdate)}>
        <S.TopModal>
          <h1>Editar Anúncio</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>

        <S.InputsContainer>
          <S.SpanText>Tipo de anuncio</S.SpanText>
          <SelectTypeSale value={typeSale} setValue={setTypeSale} />
          <S.SpanText>Publicação</S.SpanText>
          <S.SpanText>Informações do veiculo</S.SpanText>
          <GeneralInput
            label="Título"
            register={register}
            name={"title"}
            error={errors.title?.message}
            placeholder="Digitar título"
            defaultValue={announce.title}
          />
          <S.RowInputsContainer>
            <GeneralInput
              label="Ano"
              register={register}
              name={"year"}
              error={errors.year?.message}
              placeholder="Digitar ano"
              defaultValue={announce.year}
            />
            <GeneralInput
              label="Quilometragem"
              register={register}
              name={"km"}
              error={errors.km?.message}
              placeholder="0"
              defaultValue={announce.km}
            />
            <GeneralInput
              label="Preço"
              register={register}
              name={"price"}
              error={errors.price?.message}
              placeholder="Digitar preço"
              defaultValue={announce.price}
            />
          </S.RowInputsContainer>

          <TextArea
            label="Descrição"
            register={register}
            name={"description"}
            error={errors.description?.message}
            placeholder="Digitar descrição"
            defaultValue={announce.description}
          />

          <S.SpanText>Tipo do veiculo</S.SpanText>
          <SelectTypeVehicle value={typeVehicle} setValue={setTypeVehicle} />
          <div>
            {Array.from({ length: numberFiles }).map((_, index) => (
              <InputFile
                key={index}
                name="images"
                id={index.toString()}
                saveFile={addFile}
              />
            ))}
          </div>
          <S.BtnAddImg>
            {numberFiles < 5 ? (
              <ButtonPrimaryOpacity type="button" onClick={addInputFile}>
                Adicionar campo
              </ButtonPrimaryOpacity>
            ) : (
              <ButtonDisable type="button">Adicionar campo</ButtonDisable>
            )}
          </S.BtnAddImg>
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
