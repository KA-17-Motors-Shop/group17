import ThemeSelector from "../../ThemeSelector";

import { Container, Nav, NotLoggedContainer } from "./styles";
import SubMenuUserDesk from "./SubMenuDesk";

import { ButtonOutline2, ButtonLink } from "../../Button";

import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

interface IProps {
  handleModal: () => void;
  user: IUser;
}

const NavBar: React.FC<IProps> = ({ user, handleModal }) => {
  const history = useHistory();

  const handlePage = (path: string) => {
    history.push(path);
  };

  return (
    <Container>
      <Nav>
        <ButtonLink
          onClick={() => {
            handlePage("/");
          }}
        >
          Carros
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            handlePage("/");
          }}
        >
          Motos
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            handlePage("/");
          }}
        >
          Leilão
        </ButtonLink>
      </Nav>

      {user.id ? (
        <SubMenuUserDesk handleModal={handleModal} userName={user.name!} />
      ) : (
        <NotLoggedContainer>
          <ButtonLink onClick={() => handlePage("/login")}>Login</ButtonLink>
          <ButtonOutline2 onClick={() => handlePage("/register")}>
            Cadastrar
          </ButtonOutline2>
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
