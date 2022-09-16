import React from "react";
import SingleComment from "../SingleComment";
import { CommentBoxContainer, CommentsGroup, Title } from "./styles";

const CommentBox: React.FC<{ announceId: string }> = ({ announceId }) => {
  return (
    <CommentBoxContainer>
      <Title>Comentários</Title>
      <CommentsGroup>
        {Array.from({ length: 3 }).map((_, index) => (
          <SingleComment key={index} userName={"Test Te"} comment={"Coment"} />
        ))}
      </CommentsGroup>
    </CommentBoxContainer>
  );
};

export default CommentBox;
