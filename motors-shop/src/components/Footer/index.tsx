import { ContainerFooter } from "./styles";
import { RiArrowUpSLine } from "react-icons/ri";
import MotorShop from "../../assets/img/Motors.png";

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <img src={MotorShop} alt="Logo" />
      <span>© 2022 - Todos os direitos reservados. angle-up</span>
      <a href="#topo">
        <RiArrowUpSLine size={30} />
      </a>
    </ContainerFooter>
  );
};
export default Footer;
