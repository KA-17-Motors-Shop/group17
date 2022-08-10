import {
  UserInfoBoxContainer,
  TopFrontImgContainer,
  TopFrontNameContainer,
} from "./styles";

const UserInfoBox: React.FC<{ IMG_PROFILE: string }> = ({
  IMG_PROFILE,
}): JSX.Element => {
  return (
    <UserInfoBoxContainer>
      <TopFrontImgContainer>
        <img src={IMG_PROFILE} alt="Imagem de perfil" />
      </TopFrontImgContainer>
      <TopFrontNameContainer>
        <h2>Samuel Leão</h2>
        <span>Anunciante</span>
      </TopFrontNameContainer>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </p>
    </UserInfoBoxContainer>
  );
};

export default UserInfoBox;
