import React from "react";
import SingleComment from "../SingleComment";
import { CommentBoxContainer, Title } from "./styles";

const CommentBox: React.FC<{ announceId: string }> = ({ announceId }) => {
  return (
    <CommentBoxContainer>
      <Title>Comentários</Title>
      {Array.from({ length: 3 }).map((_, index) => (
        <SingleComment key={index} userName={"Test Te"} comment={"Coment"} />
      ))}
    </CommentBoxContainer>
  );
};

export default CommentBox;
