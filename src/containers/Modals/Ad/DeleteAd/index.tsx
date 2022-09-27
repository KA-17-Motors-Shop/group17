import { ButtonAlert, ButtonNegative } from "../../../../components/Buttons";
import { CloseModalBtn } from "../../../../components/Buttons/CloseModalBtn";
import * as S from "./styles";

interface IHandleModal {
  handleModal: () => void;
  id: string;
}

const DeleteAd = ({ handleModal, id }: IHandleModal) => {
  const deleteAdConfirm = () => {
    console.log("delete ->" + id);
    handleModal();
  };

  return (
    <S.Centralize>
      <S.ModalContainer>
        <S.TopModal>
          <h1>Excluir anúncio</h1>
          <CloseModalBtn onClick={handleModal} />
        </S.TopModal>
        <h1>Tem certeza que deseja remover este anúncio?</h1>
        <h2>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
          conta e removerá seus dados de nossos servidores.
        </h2>

        <S.BottoModal>
          <ButtonNegative type="button" onClick={handleModal}>
            Cancelar
          </ButtonNegative>
          <ButtonAlert onClick={deleteAdConfirm} type="button">
            Sim, excluír anúcio
          </ButtonAlert>
        </S.BottoModal>
      </S.ModalContainer>
    </S.Centralize>
  );
};

export default DeleteAd;
