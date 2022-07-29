import { GiHamburgerMenu } from "react-icons/gi";
import { Container } from "./styles";

const DropDownMenu: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
  return (
    <Container>
      <GiHamburgerMenu size={30} />
    </Container>
  );
};
export default DropDownMenu;
