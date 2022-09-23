import { useCallback, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LoaderLocalComponent from "../../components/Loader/LoaderLocalComponent";
import SellerInfoBox from "../../components/Boxes/SellerInfoBox";
import { IAccount } from "../../interfaces/user";
import { useUser } from "../../Providers/User";
import { EmptyContainer } from "../AdDetails/styles";

import * as S from "./styles";

const MyPushase: React.FC = () => {
  const { token, getUser } = useUser();

  const [account, setAccount] = useState<IAccount>({});
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
    <S.ContainerMyPorchase>
      <Header />

      {loadding ? (
        <EmptyContainer>
          <LoaderLocalComponent />
        </EmptyContainer>
      ) : (
        <S.MainMyPorchase>
          <SellerInfoBox seller={account} />

          <div>
            <p>Lista de compras e lances</p>
          </div>
        </S.MainMyPorchase>
      )}
      <Footer />
    </S.ContainerMyPorchase>
  );
};

export default MyPushase;
