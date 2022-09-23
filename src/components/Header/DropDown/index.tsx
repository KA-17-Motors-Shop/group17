import {
  Container,
  DropContent,
  DropItem,
  DropItemButton,
  DropItemSwitch,
  DropRoot,
  DropSeparator,
  DropTrigger,
} from "./styles";

import { useState } from "react";
import ThemeSelector from "../../ThemeSelector";
import BurguerIcon from "../BurguerIcon";
import SubMenuUser from "./SubMenu";
import { useHistory } from "react-router-dom";
import { IUser } from "../../../interfaces/user";

interface IProps {
  user: IUser;
  handleModal: () => void;
}

const DropDownMenu: React.FC<IProps> = ({ user, handleModal }) => {
  const [drop, setDrop] = useState<boolean>(false);

  const history = useHistory();

  const handlePage = (path: string) => {
    history.push(path);
  };

  const handleMenu = () => {
    setDrop(!drop);
  };

  return (
    <Container>
      <DropRoot onOpenChange={handleMenu}>
        <DropTrigger>
          <BurguerIcon open={drop} />
        </DropTrigger>
        <DropContent>
          <DropItem onClick={() => handlePage("/")}>Carros</DropItem>
          <DropItem onClick={() => handlePage("/")}>Motos</DropItem>
          <DropItem onClick={() => handlePage("/")}>Leilão</DropItem>
          <DropSeparator />
          {!user.id ? (
            <>
              <DropItem onClick={() => handlePage("/login")}>Login</DropItem>
              <DropItemButton onClick={() => handlePage("/register")}>
                Cadastrar
              </DropItemButton>
            </>
          ) : (
            <SubMenuUser handleModal={handleModal} userName={user.name!} />
          )}
          <DropSeparator />
          <DropItemSwitch>
            <ThemeSelector />
          </DropItemSwitch>
        </DropContent>
      </DropRoot>
    </Container>
  );
};
export default DropDownMenu;
