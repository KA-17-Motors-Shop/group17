import Header from "../../components/Header"

import * as S from "./styles";

const Dashboard: React.FC = () => {

  return (
    <S.Page>
      <Header/>
      <S.Main>
        <h1>Criar leiloes</h1>
        <h1>Lista de leiloẽs</h1>
      </S.Main>

    </S.Page>
  );
};

export default Dashboard;
