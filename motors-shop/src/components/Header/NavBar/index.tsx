import ThemeSelector from "../../ThemeSelector";


import { Container, Nav, NotLoggedContainer } from "./styles";

import SubMenuUserDesk from "./SubMenuDesk";

import { ButtonOutline2, ButtonLink } from "../../Button";

import { useHistory } from "react-router-dom";

const NavBar: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
  const userName = "Samuel Leão"; // Apenas para testes (Deve vir do DB)

  const history = useHistory();

  const handlePage = (path: string) => {
    history.push(path);
  };

  return (
    <Container>
      <Nav>
        <ButtonLink>Carros</ButtonLink>
        <ButtonLink>Motos</ButtonLink>
        <ButtonLink>Leilão</ButtonLink>
      </Nav>

      {isLogged ? (
        <SubMenuUserDesk userName={userName} />
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
