import BannerDash from "../../components/Banners/BannerDash";

import Header from "../../components/Header";
import Modal from "../../components/Modals";
// import ShowButtons from "../../components/Button/ShowButtons";
// import CreateAd from "../../components/Modals/CreateAd";
// import UpdateAd from "../../components/Modals/UpdateAd";
import ImgVehicle from "../../components/Modals/ImgVehicle";
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
        <ImgVehicle handleModal={handleModal} />
      </Modal>
      <S.Page>
        <Header />
        <S.Main>
          <BannerDash />
          {/* <div>
            <ShowButtons />
          </div> */}

          <button onClick={handleModal} type="button">
            Imagem do Veiculo
          </button>
        </S.Main>
      </S.Page>
    </>
  );
};

export default Dashboard;
