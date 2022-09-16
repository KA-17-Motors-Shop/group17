import { DescriptionBoxContainer, ParagraphContainer } from "./styles";
import { TitleContainer } from "../VehicleInformation/styles";

const DescriptionBox: React.FC<{ description: string }> = ({
  description,
}): JSX.Element => {
  return (
    <DescriptionBoxContainer>
      <TitleContainer>Descrição</TitleContainer>
      <ParagraphContainer>{description}</ParagraphContainer>
    </DescriptionBoxContainer>
  );
};

export default DescriptionBox;
