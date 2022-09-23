import { useHistory } from "react-router-dom";
import { useUser } from "../../../../Providers/User";
import Avatar from "../../../Avatar";
import { Content, Item, LoggedMenu, Trigger } from "./styles";

interface Iprops {
  userName: string;
  handleModal: () => void;
}

const SubMenuUserDesk: React.FC<Iprops> = ({ userName, handleModal }) => {
  const { logOut } = useUser();
  const history = useHistory();

  return (
    <LoggedMenu>
      <Trigger>
        <Avatar userName={userName} />
      </Trigger>

      <Content sideOffset={21}>
        <Item onSelect={() => history.push("/profile")}>Meu Perfil</Item>
        <Item onSelect={handleModal}>Gerenciar Endereços</Item>
        <Item>Minhas Compras</Item>
        <Item onSelect={logOut}>Sair</Item>
      </Content>
    </LoggedMenu>
  );
};

export default SubMenuUserDesk;
