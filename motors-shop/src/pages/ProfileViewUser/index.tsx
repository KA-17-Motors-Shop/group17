import IMG from "../../assets/img/car_teste.png";
import IMG_PROFILE from "../../assets/img/default_profile.png";
import IMG_MOTO from "../../assets/img/moto_teste.png";
import {
  ProfileMain,
  TitleContainer,
  CardContainer,
  TitleContainerBelow,
  ProfileViewUserContainer,
} from "./styles";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UserInfoBox from "../../components/UserInfoBox";

const ProfileViewUser: React.FC = (): JSX.Element => {
  return (
    <ProfileViewUserContainer>
      <Header isLogged={false} />
      <ProfileMain>
        <UserInfoBox IMG_PROFILE={IMG_PROFILE} />
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
