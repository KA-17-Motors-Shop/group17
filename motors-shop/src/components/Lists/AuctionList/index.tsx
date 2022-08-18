import Stopwatch from "../../Stopwatch";
import {
  Container,
  ContainerAuction,
  ContainerAvatar,
  ContainerBottom,
  ContainerBottomInfo,
  ContainerInfo,
  ContainerTitle,
} from "./styles";

const AuctionList: React.FC = () => {
  return (
    <Container>
      <h2>Leilão</h2>
      <ContainerAuction>
        <ContainerInfo>
          <ContainerTitle>
            <Stopwatch />
            <h3>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem...
            </p>
          </ContainerTitle>

          <ContainerAvatar>
            <p>NOME DO DONO</p>
          </ContainerAvatar>

          <ContainerBottom>
            <ContainerBottomInfo>
              <p>2013</p>
            </ContainerBottomInfo>
            <ContainerBottomInfo>
              <p>0 KM</p>
            </ContainerBottomInfo>
          </ContainerBottom>
        </ContainerInfo>
      </ContainerAuction>
    </Container>
  );
};

export default AuctionList;
