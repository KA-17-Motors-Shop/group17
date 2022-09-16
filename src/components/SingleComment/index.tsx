import Avatar from "../Avatar";
import { Comment, SingleCommetContainer } from "./styles";

interface IProps {
  userName: string;
  comment: string;
}

const SingleComment: React.FC<IProps> = ({
  userName,
  comment,
}): JSX.Element => {
  return (
    <SingleCommetContainer>
      <div>
        <Avatar userName={userName} />
      </div>
      <Comment>{comment}</Comment>
    </SingleCommetContainer>
  );
};

export default SingleComment;
