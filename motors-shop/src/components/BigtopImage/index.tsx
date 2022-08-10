import { TopImageContainer } from "./styles";

const BigTopImage: React.FC<{ MERCEDES: string }> = ({
  MERCEDES,
}): JSX.Element => {
  return (
    <TopImageContainer>
      <img src={MERCEDES} alt="Imagem ilustrativa de carros e motos" />
    </TopImageContainer>
  );
};

export default BigTopImage;
