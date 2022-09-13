import BannerDash from "../../components/Banners/BannerDash";
import ShowButtons from "../../components/Button/ShowButtons";
import Header from "../../components/Header";
import Modal from "../../components/Modals";
import CreateAd from "../../components/Modals/CreateAd";
import { useState } from "react";
import * as S from "./styles";

const Dashboard: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const handleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <Modal show={modal} close={handleModal} height="36rem" width="100%">
        <S.Centralize>
          <CreateAd handleModal={handleModal} />
        </S.Centralize>
      </Modal>
      <S.Page>
        <Header />
        <S.Main>
          <BannerDash />
          {/* <div>
            <ShowButtons />
          </div> */}

          <button onClick={handleModal} type="button">
            Criar Anuncio
          </button>
        </S.Main>
      </S.Page>
    </>
  );
};

export default Dashboard;
