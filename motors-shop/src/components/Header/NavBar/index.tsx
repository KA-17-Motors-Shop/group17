import ThemeSelector from "../../ThemeSelector";
import {
  Button,
  Container,
  Link,
  LoggedContainer,
  NameBol,
  NameSpan,
  Nav,
  NotLoggedContainer,
} from "./styles";

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
          <Button>Cadastrar</Button>
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
