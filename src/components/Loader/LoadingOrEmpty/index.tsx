import React, { useEffect, useState } from "react";

import { ThreeDots } from "react-loader-spinner";
import { LoadContainer, Message } from "./styles";

const LoadingOrEmpty: React.FC<{ message: string }> = ({ message }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return (
    <>
      {loading ? (
        <LoadContainer>
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#5126EA"
            ariaLabel="three-dots-loading"
          />
        </LoadContainer>
      ) : (
        <Message>{message}</Message>
      )}
    </>
  );
};

export default LoadingOrEmpty;
