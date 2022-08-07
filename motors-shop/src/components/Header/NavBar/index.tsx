import ThemeSelector from "../../ThemeSelector";

import { Container, Link, Nav, NotLoggedContainer } from "./styles";
import SubMenuUserDesk from "./SubMenuDesk";

import { ButtonPrimary } from "../../Button";

const NavBar: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
  const userName = "Samuel Leão"; // Apenas para testes (Deve vir do DB)

  return (
    <Container>
      <Nav>
        <Link>Carros</Link>
        <Link>Motos</Link>
        <Link>Leilão</Link>
      </Nav>

      {isLogged ? (
        <SubMenuUserDesk userName={userName} />
      ) : (
        <NotLoggedContainer>
          <Link>Fazer Login</Link>
          <ButtonPrimary>Cadastrar</ButtonPrimary>
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
