import { IResComment } from "../../interfaces/comments";
import { useUser } from "../../Providers/User";
import Avatar from "../Avatar";
import {
  ActionButtons,
  AvatarContainer,
  Comment,
  SingleCommetContainer,
  TopContainer,
} from "./styles";

import { MdModeEditOutline } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";

interface IProps {
  comment: IResComment;
}

const SingleComment: React.FC<IProps> = ({ comment }): JSX.Element => {
  const { userId } = useUser();

  return (
    <SingleCommetContainer>
      <TopContainer>
        <AvatarContainer>
          <Avatar
            userName={comment.user.name}
            color={comment.user.avatarColor}
          />
        </AvatarContainer>
        {userId === comment.user.id && (
          <ActionButtons>
            <MdModeEditOutline />
            <IoMdTrash />
          </ActionButtons>
        )}
      </TopContainer>
      <Comment>{comment.comment}</Comment>
    </SingleCommetContainer>
  );
};

export default SingleComment;
