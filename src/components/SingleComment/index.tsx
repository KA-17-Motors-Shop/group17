import Avatar from "../Avatar";
import { Comment, SingleCommetContainer } from "./styles";

interface IProps {
  userName: string;
  comment: string;
  color: string;
}

const SingleComment: React.FC<IProps> = ({
  userName,
  comment,
  color,
}): JSX.Element => {
  return (
    <SingleCommetContainer>
      <div>
        <Avatar userName={userName} color={color} />
      </div>
      <Comment>{comment}</Comment>
    </SingleCommetContainer>
  );
};

export default SingleComment;
