import React from "react";
import { ISeller } from "../../../interfaces/user";
import { avatarLetters } from "../../../utils/avatarLetters";

import {
  Avatar,
  NameContainerWithTag,
  TopDiv,
  UserInfoBoxContainer,
} from "./styles";

const SellerInfoBox: React.FC<{ seller: ISeller }> = ({ seller }) => {
  return (
    <UserInfoBoxContainer>
      <TopDiv>
        <Avatar>{avatarLetters(seller.name).toUpperCase()}</Avatar>
        <NameContainerWithTag>
          <h2>{seller.name}</h2>
          <span>{seller.isSeller ? "Anunciante" : "Comprador"}</span>
        </NameContainerWithTag>
      </TopDiv>
      <p>{seller.description}</p>
    </UserInfoBoxContainer>
  );
};

export default SellerInfoBox;
