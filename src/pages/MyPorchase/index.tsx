import { useCallback, useEffect, useState } from "react";
import Header from "../../components/Header";
import LoaderLocalComponent from "../../components/Loader/LoaderLocalComponent";
import SellerInfoBox from "../../components/SellerInfoBox";
import { ISeller } from "../../interfaces/user";
import { useUser } from "../../Providers/User";
import { EmptyContainer } from "../AdDetails/styles";

const MyPushase: React.FC = () => {
  const { token, getUser } = useUser();

  const [account, setAccount] = useState<ISeller>({});
  const [loadding, setLoadding] = useState(false);

  // listPurshases Provider

  const handleAccount = useCallback(async () => {
    const accountGet = await getUser(token as string);
    setAccount(accountGet!);
    setLoadding(false);
  }, [getUser, token]);

  useEffect(() => {
    setLoadding(true);
    handleAccount();
  }, [handleAccount]);

  return (
    <>
      <Header />

      {loadding ? (
        <EmptyContainer>
          <LoaderLocalComponent />
        </EmptyContainer>
      ) : (
        <>
          <div>
            <SellerInfoBox seller={account} />
          </div>
          <div>
            <p>Lista de compras e lances</p>
          </div>
        </>
      )}
    </>
  );
};

export default MyPushase;
