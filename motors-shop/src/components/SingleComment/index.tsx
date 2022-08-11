import { SingleCommetContainer } from "./styles";
import { NameContainer } from "../Card/styles";

const SingleComment: React.FC<{ PROFILE2: string }> = ({
  PROFILE2,
}): JSX.Element => {
  return (
    <SingleCommetContainer>
      <NameContainer>
        <div>{/* <img src={PROFILE2} alt="Imagem de perfil" /> */}</div>
        <span></span>
      </NameContainer>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae alias
        molestias ab rerum aperiam nesciunt fugit, rem illo, debitis numquam a
        sapiente quidem animi saepe. Aliquam aspernatur recusandae saepe ex.
      </p>
    </SingleCommetContainer>
  );
};
export default SingleComment;
