import Logo from "../Logo";
import DropDownMenu from "./DropDown";
import NavBar from "./NavBar";
import { ContainerHeader } from "./styles";

const Header: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
  return (
    <ContainerHeader>
      <Logo />
      <DropDownMenu isLogged={isLogged} />
      <NavBar isLogged={isLogged} />
    </ContainerHeader>
  );
};

export default Header;
