import React, { useCallback, useEffect, useState } from "react";
import { IResComment } from "../../interfaces/comments";
import { useComments } from "../../Providers/Comments";
import LoadingOrEmpty from "../Loader/LoadingOrEmpty";
import SingleComment from "../SingleComment";
import { CommentBoxContainer, CommentsGroup, Empty, Title } from "./styles";

const CommentBox: React.FC<{ announceId: string }> = ({ announceId }) => {
  const [comments, setComments] = useState<IResComment[]>();

  const { getCommentsAnnounce } = useComments();

  const handleAnnounces = useCallback(async () => {
    const commentsGet = await getCommentsAnnounce(announceId);
    setComments(commentsGet);
  }, [getCommentsAnnounce, announceId]);

  useEffect(() => {
    handleAnnounces();
  }, [handleAnnounces]);

  console.log(comments);

  return (
    <CommentBoxContainer>
      <Title>Comentários</Title>
      {comments?.length ? (
        <CommentsGroup>
          {comments.map((item) => (
            <SingleComment
              key={item.id}
              userName={item.user.name}
              comment={item.comment}
            />
          ))}
        </CommentsGroup>
      ) : (
        <Empty>
          <LoadingOrEmpty message="Nenhum comentário encontrado" />
        </Empty>
      )}
    </CommentBoxContainer>
  );
};

export default CommentBox;
