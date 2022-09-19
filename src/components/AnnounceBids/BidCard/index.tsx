import React from "react";
import { IResBids } from "../../../interfaces/bids";
import Avatar from "../../Avatar";
import moment from "moment";
import { TopContainer, Card, DateSpan, Price } from "./styles";

const BidCard: React.FC<{ bid: IResBids }> = ({ bid }) => {
  const datePublished = new Date(bid.date);

  return (
    <Card>
      <TopContainer>
        <Avatar userName={bid.user.name} />
        <DateSpan>
          &sdot; {moment(datePublished).startOf("minutes").fromNow()}
        </DateSpan>
      </TopContainer>
      <Price>
        R$ {parseFloat(bid.value).toFixed(2).toString().replace(".", ",")}
      </Price>
    </Card>
  );
};

export default BidCard;
