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
import { IFiltersParams } from "../../../interfaces/auction";
import { useFilters } from "../../../Providers/Filters";

interface IProps {
  user: IUser;
  handleModal: () => void;
}

const DropDownMenu: React.FC<IProps> = ({ user, handleModal }) => {
  const [drop, setDrop] = useState<boolean>(false);

  const history = useHistory();
  const { filterBy } = useFilters();

  const handlePage = (data: IFiltersParams) => {
    history.push("/");
    filterBy(data);
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
          <DropItem onClick={() => handlePage({ typeVehicle: "car" })}>
            Carros
          </DropItem>
          <DropItem onClick={() => handlePage({ typeVehicle: "motocycle" })}>
            Motos
          </DropItem>
          <DropItem onClick={() => handlePage({ type: "auction" })}>
            Leilão
          </DropItem>
          <DropSeparator />
          {!user.id ? (
            <>
              <DropItem onClick={() => history.push("/login")}>Login</DropItem>
              <DropItemButton onClick={() => history.push("/register")}>
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
