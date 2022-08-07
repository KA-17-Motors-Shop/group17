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
<<<<<<< HEAD

      <SubMenuContainer sideOffset={-100} alignOffset={50}>
=======
      <SubMenuContainer sideOffset={3}>
>>>>>>> a3f91cdba653ed66b96ea60b9da6d174b6ac7933
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
