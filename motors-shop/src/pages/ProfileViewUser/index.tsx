import IMG_PROFILE from "../../assets/img/default_profile.png";
import IMG_MOTO from "../../assets/img/moto_teste.png";
import IMG from "../../assets/img/car_teste.png";

import UserInfoBox from "../../components/UserInfoBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";

import {
  ProfileViewUserContainer,
  TitleContainerBelow,
  TitleContainer,
  CardContainer,
  ProfileMain,
} from "./styles";

const ProfileViewUser: React.FC = (): JSX.Element => {
  return (
    <ProfileViewUserContainer>
      <Header />
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
