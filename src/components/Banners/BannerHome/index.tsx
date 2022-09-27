import { useHistory } from "react-router-dom";

import {
  ContainerBanner,
  ContainerButtons,
  ContainerButtonsBottom,
  ContainerButtonsTop,
  ContainerMain,
  ContainerTitle,
} from "./styles";

import { ButtonOutlineLight } from "../../Button";
import Modal from "../../Modals";
import Filters from "../../Modals/Filters";
import { useState } from "react";

const BannerHome: React.FC = () => {
  const history = useHistory();
  const handlePage = (path: string) => {
    history.push(path);
  };

  const [modalFilters, setModalFilters] = useState(false);

  return (
    <>
      <Modal show={modalFilters} close={() => setModalFilters(false)}>
        <Filters handleClose={() => setModalFilters(false)} />
      </Modal>
      <ContainerMain id="main">
        <ContainerBanner>
          <ContainerTitle>
            <h1>Velocidade e experiência em um lugar feito para você</h1>
            <p>Um ambiente feito para você explorar o seu melhor</p>
          </ContainerTitle>
          <ContainerButtons>
            <ContainerButtonsTop>
              <ButtonOutlineLight
                type="button"
                onClick={() => handlePage("/preview")}
              >
                Leilão
              </ButtonOutlineLight>
              <ButtonOutlineLight
                type="button"
                onClick={() => handlePage("/preview")}
              >
                Carros
              </ButtonOutlineLight>
              <ButtonOutlineLight
                type="button"
                onClick={() => handlePage("/preview")}
              >
                Motos
              </ButtonOutlineLight>
            </ContainerButtonsTop>
            <ContainerButtonsBottom>
              <ButtonOutlineLight onClick={() => setModalFilters(true)}>
                Filtrar
              </ButtonOutlineLight>
            </ContainerButtonsBottom>
          </ContainerButtons>
        </ContainerBanner>
      </ContainerMain>
    </>
  );
};

export default BannerHome;

// export const BannerDash: React.FC = () => {
//   return (
//     <ContainerMain id="main">
//       <ContainerBanner>
//         <ContainerTitle>
//           <h1>Velocidade e experiência em um lugar feito para você</h1>
//           <p>Encontre o automovel dos sonhos!</p>
//         </ContainerTitle>
//         <ContainerButtons>
//           <ButtonOutlineLight>Login</ButtonOutlineLight>
//           <ButtonOutlineLight>Cadastrar</ButtonOutlineLight>
//         </ContainerButtons>
//       </ContainerBanner>
//     </ContainerMain>
//   );
// };
