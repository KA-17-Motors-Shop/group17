import {
  AvatarContainer,
  Container,
  ContainerMultipleReactions,
  ReactionTagButton,
} from "./styles";
import { ButtonDisable, ButtonPrimary } from "../../../Button";

import Avatar from "../../../Avatar";
import { useCallback, useEffect, useState } from "react";
import { useUser } from "../../../../Providers/User/login";
import { IUser } from "../../../../interfaces/user";

const REACTIONS: Array<string> = [
  "Gostei muito!",
  "Incrível",
  "Recomendarei para meus amigos",
  "Ótimo",
  "Show de bola",
  "Top demais",
];

const CommentInput: React.FC = (): JSX.Element => {
  const [comment, setComment] = useState("");
  const [user, setUser] = useState<IUser>({});

  const { token, getUser } = useUser();

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  const handleComment = () => {
    console.log("Comentário --> " + comment);
  };

  return (
    <Container>
      {user.id && (
        <AvatarContainer>
          <Avatar userName={user.name as string} />
        </AvatarContainer>
      )}
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Digitar comentário"
      />
      {user.id ? (
        <ButtonPrimary onClick={handleComment}>Comentar</ButtonPrimary>
      ) : (
        <ButtonDisable>Comentar</ButtonDisable>
      )}
      <ContainerMultipleReactions>
        {REACTIONS.map((current: string, index) => (
          <ReactionTagButton key={index} onClick={() => setComment(current)}>
            {current}
          </ReactionTagButton>
        ))}
      </ContainerMultipleReactions>
    </Container>
  );
};

export default CommentInput;