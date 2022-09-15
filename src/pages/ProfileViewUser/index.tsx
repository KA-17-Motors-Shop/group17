import UserInfoBox from "../../components/UserInfoBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ProfileViewUserContainer, ProfileMain } from "./styles";
import { useUser } from "../../Providers/User/login";
import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";
import EditProfile from "../../components/Modal/EditProfile";
import CreateAnounce from "../../components/Modal/CreateAnounce";
import MyAnnouncesList from "../../components/MyAnnouncesList";

const ProfileViewUser: React.FC = (): JSX.Element => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});

  const [editProfileModal, setEditProfileModal] = useState(false);
  const [createAnunceModal, setCreateAnunceModal] = useState(false);

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
  }, [getUser, token]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);

  return (
    <>
      <EditProfile
        show={editProfileModal}
        handle={() => setEditProfileModal(false)}
      />
      <CreateAnounce
        show={createAnunceModal}
        handle={() => setCreateAnunceModal(false)}
      />
      <ProfileViewUserContainer>
        <Header />
        <ProfileMain>
          <UserInfoBox
            description={user.description as string}
            userName={user.name as string}
            typeUser={user.isSeller as boolean}
            openProfileModal={() => setEditProfileModal(true)}
            openAnounceModal={() => setCreateAnunceModal(true)}
          />
          <MyAnnouncesList />
        </ProfileMain>
        <Footer />
      </ProfileViewUserContainer>
    </>
  );
};

export default ProfileViewUser;
