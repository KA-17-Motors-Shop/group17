import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { DropItem } from "../styles";
import { LoggedTrigger, NameBol, NameSpan, SubMenuContainer } from "./styles";

interface Iprops {
  userName: string;
}

const SubMenuUser: React.FC<Iprops> = ({ userName }) => {
  return (
    <DropdownMenu.Sub>
      <LoggedTrigger>
        <NameBol>{userName.substring(0, 1)}</NameBol>
        <NameSpan>{userName}</NameSpan>
      </LoggedTrigger>

      <SubMenuContainer sideOffset={3}>
        <DropItem>Editar Perfil</DropItem>
        <DropItem>Editar endereço</DropItem>
        <DropItem>Minhas Compras</DropItem>
        <DropItem>Sair</DropItem>
        <DropdownMenu.Arrow />
      </SubMenuContainer>
    </DropdownMenu.Sub>
  );
};

export default SubMenuUser;
