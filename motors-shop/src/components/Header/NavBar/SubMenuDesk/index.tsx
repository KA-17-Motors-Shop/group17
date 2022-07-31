import {
  Content,
  Item,
  LoggedMenu,
  NameBol,
  NameSpan,
  Trigger,
} from "./styles";

interface Iprops {
  userName: string;
}

const SubMenuUserDesk: React.FC<Iprops> = ({ userName }) => {
  return (
    <LoggedMenu>
      <Trigger>
        <NameBol>{userName.substring(0, 1)}</NameBol>
        <NameSpan>{userName}</NameSpan>
      </Trigger>
      <Content sideOffset={21}>
        <Item>Editar Perfil</Item>
        <Item>Editar Endereço</Item>
        <Item>Minhas Compras</Item>
        <Item>Sair</Item>
      </Content>
    </LoggedMenu>
  );
};

export default SubMenuUserDesk;
