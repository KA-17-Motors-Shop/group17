import ThemeSelector from "../../ThemeSelector";
import { Button, Container, Link, Nav, NotLoggedContainer } from "./styles";
import SubMenuUserDesk from "./SubMenuDesk";

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
          <Button>Cadastrar</Button>
        </NotLoggedContainer>
      )}
      <ThemeSelector />
    </Container>
  );
};

export default NavBar;
