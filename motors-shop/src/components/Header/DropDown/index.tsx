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

const DropDownMenu: React.FC<{ isLogged: boolean }> = ({ isLogged }) => {
  const [drop, setDrop] = useState<boolean>(false);

  const userName = "Samuel Leão";

  const handleMenu = () => {
    console.log(drop);
    setDrop(!drop);
  };

  return (
    <Container>
      <DropRoot onOpenChange={handleMenu}>
        <DropTrigger>
          <BurguerIcon open={drop} />
        </DropTrigger>
        <DropContent>
          <DropItem>Carros</DropItem>
          <DropItem>Motos</DropItem>
          <DropItem>Leilão</DropItem>
          <DropSeparator />
          {!isLogged ? (
            <>
              <DropItem>Fazer Login</DropItem>
              <DropItemButton>Cadastrar</DropItemButton>
            </>
          ) : (
            <SubMenuUser userName={userName} />
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
