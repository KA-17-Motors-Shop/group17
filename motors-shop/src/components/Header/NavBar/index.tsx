import ThemeSelector from "../../ThemeSelector";
<<<<<<< HEAD
import { Button, Container, Link, Nav, NotLoggedContainer } from "./styles";
import SubMenuUserDesk from "./SubMenuDesk";
=======
import {
  Container,
  Link,
  LoggedContainer,
  NameBol,
  NameSpan,
  Nav,
  NotLoggedContainer,
} from "./styles";
>>>>>>> abee0121e1421863a1df158e658639b5e38c2cbd

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
        <SubMenuUserDesk userName={userName} />
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
