import UserInfoBox from "../../components/UserInfoBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AuctionList from "../../components/Lists/AuctionList";
import CarsList from "../../components/Lists/CarsList";
import MotorcyclesList from "../../components/Lists/MotorcyclesList";

import { ProfileViewUserContainer, ProfileMain } from "./styles";
import { useUser } from "../../Providers/User/login";
import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";

const ProfileViewUser: React.FC = (): JSX.Element => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <ProfileViewUserContainer>
      <Header />
      <ProfileMain>
        <UserInfoBox
          description={user.description as string}
          userName={user.name as string}
          typeUser={user.isSeller as boolean}
        />
        <AuctionList />
        <CarsList />
        <MotorcyclesList />
      </ProfileMain>
      <Footer />
    </ProfileViewUserContainer>
  );
};

export default ProfileViewUser;
