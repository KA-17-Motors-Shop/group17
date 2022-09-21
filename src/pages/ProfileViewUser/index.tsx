import UserInfoBox from "../../components/UserInfoBox";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import { ProfileViewUserContainer, ProfileMain } from "./styles";
import { useUser } from "../../Providers/User";
import { useCallback, useEffect, useState } from "react";
import { IUser } from "../../interfaces/user";

import UpdateProfile from "../../components/Modals/UpdateProfile";
import CreateAd from "../../components/Modals/Ad/CreateAd";
import Modal from "../../components/Modals";

import MyAnnouncesList from "../../components/MyAnnouncesList";
import MyBidsList from "../../components/MyBidsList";
import LoaderLocalComponent from "../../components/Loader/LoaderLocalComponent";
import { EmptyContainer } from "../AdDetails/styles";

const ProfileViewUser: React.FC = (): JSX.Element => {
  const { token, getUser } = useUser();

  const [user, setUser] = useState<IUser>({});

  const handleAuth = useCallback(async () => {
    const user = await getUser(token as string);
    setUser(user!);
    setLoadding(false);
  }, [getUser, token]);

  useEffect(() => {
    setLoadding(true);
    handleAuth();
  }, [handleAuth]);

  const [editProfileModal, setEditProfileModal] = useState<boolean>(false);
  const [createAdModal, setCreateAdModal] = useState<boolean>(false);
  const [loadding, setLoadding] = useState(false);

  const handleModalProfile = () => {
    setEditProfileModal(!editProfileModal);
  };

  const handleModalCreateAd = () => {
    setCreateAdModal(!createAdModal);
  };
  return (
    <>
      <Modal show={editProfileModal} close={handleModalProfile}>
        <UpdateProfile handleModal={handleModalProfile} user={user} />
      </Modal>
      <Modal show={createAdModal} close={handleModalCreateAd}>
        <CreateAd handleModal={handleModalCreateAd} />
      </Modal>

      <ProfileViewUserContainer>
        <Header />
        {loadding ? (
          <EmptyContainer>
            <LoaderLocalComponent />
          </EmptyContainer>
        ) : (
          <ProfileMain>
            <UserInfoBox
              description={user.description as string}
              userName={user.name as string}
              typeUser={user.isSeller as boolean}
              openProfileModal={handleModalProfile}
              openAnounceModal={handleModalCreateAd}
            />
            {user.isSeller ? <MyAnnouncesList /> : <MyBidsList />}
          </ProfileMain>
        )}
        <Footer />
      </ProfileViewUserContainer>
    </>
  );
};

export default ProfileViewUser;
