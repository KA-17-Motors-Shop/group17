import ThemeSelector from "../../ThemeSelector";
import {
  Container,
  Link,
  LoggedContainer,
  NameBol,
  NameSpan,
  Nav,
  NotLoggedContainer,
} from "./styles";

// import { ButtonPrimary } from "../../Button";

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
        <LoggedContainer>
          <NameBol>{userName.substring(0, 1)}</NameBol>
          <NameSpan>{userName}</NameSpan>
        </LoggedContainer>
      ) : (
        <NotLoggedContainer>
          <Link>Fazer Login</Link>
          {/* <ButtonPrimary>Cadastrar</ButtonPrimary> */}
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
