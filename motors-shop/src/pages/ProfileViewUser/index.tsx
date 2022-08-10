import IMG from "../../assets/img/car_teste.png";
import IMG_PROFILE from "../../assets/img/default_profile.png";
import IMG_MOTO from "../../assets/img/moto_teste.png";
import {
  ProfileMain,
  TopBottomContainer,
  TopFrontContainer,
  TopFrontNameContainer,
  TopFrontImgContainer,
  TitleContainer,
  CardContainer,
  TitleContainerBelow,
  ProfileViewUserContainer,
} from "./styles";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const ProfileViewUser: React.FC = (): JSX.Element => {
  return (
    <ProfileViewUserContainer>
      <Header isLogged={false} />
      <ProfileMain>
        <TopBottomContainer />
        <TopFrontContainer>
          <TopFrontImgContainer>
            <img src={IMG_PROFILE} alt="Imagem de perfil" />
          </TopFrontImgContainer>
          <TopFrontNameContainer>
            <h2>Samuel Leão</h2>
            <span>Anunciante</span>
          </TopFrontNameContainer>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </TopFrontContainer>
        <TitleContainer>Carros</TitleContainer>
        <CardContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} IMG={IMG} />
          ))}
        </CardContainer>
        <TitleContainerBelow>Motos</TitleContainerBelow>
        <CardContainer>
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} IMG={IMG_MOTO} />
          ))}
        </CardContainer>
      </ProfileMain>
      <Footer />
    </ProfileViewUserContainer>
  );
};

export default ProfileViewUser;
