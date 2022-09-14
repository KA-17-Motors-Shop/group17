import { ButtonPrimaryOutline } from "../Button";

import {
  UserInfoBoxContainer,
  NameContainerWithTag,
  Avatar,
  TopDiv,
  ButtonsContainer,
} from "./styles";

interface IProps {
  userName: string;
  description: string;
  typeUser: boolean;
}

const UserInfoBox: React.FC<IProps> = ({
  userName,
  description,
  typeUser,
}): JSX.Element => {
  const avatarLetters = (name: string = "Usuário") => {
    if (name.split(" ").length > 1) {
      return name[0] + name[name.split("").indexOf(" ") + 1];
    }
    return name[0];
  };

  return (
    <UserInfoBoxContainer>
      <TopDiv>
        <Avatar>{avatarLetters(userName).toUpperCase()}</Avatar>
        <NameContainerWithTag>
          <h2>{userName}</h2>
          <span>{typeUser ? "Anunciante" : "Comprador"}</span>
        </NameContainerWithTag>
      </TopDiv>
      <p>{description}</p>
      <ButtonsContainer>
        <ButtonPrimaryOutline>Editar perfil</ButtonPrimaryOutline>
        {typeUser && <ButtonPrimaryOutline>Criar anúncio</ButtonPrimaryOutline>}
      </ButtonsContainer>
    </UserInfoBoxContainer>
  );
};

export default UserInfoBox;
