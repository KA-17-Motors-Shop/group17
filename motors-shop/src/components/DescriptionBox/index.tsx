import { DescriptionBoxContainer } from "./styles";

const DescriptionBox: React.FC = (): JSX.Element => {
  return (
    <DescriptionBoxContainer>
      <h1>Descrição</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        impedit. Assumenda atque ipsam placeat architecto veritatis, nam ullam
        beatae quas reprehenderit cum impedit velit voluptates consequatur odio
        possimus commodi voluptas!
      </p>
    </DescriptionBoxContainer>
  );
};

export default DescriptionBox;
