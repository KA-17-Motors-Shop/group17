import React from "react";
import { ZipCodeProvider } from "./User/cepValidation";
import { UserProvider } from "./User";
import { RegisterProvider } from "./User/register";
import { ActivateProvider } from "./User/activateUser";
import { ListAnounceProvider } from "./Auction/listAll";
import { RegisterAuctionProvider } from "./Auction/register";
import { BidsProvider } from "./Bids";
import { CommentProvider } from "./Comments";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <UserProvider>
        <ActivateProvider>
          <RegisterAuctionProvider>
            <ListAnounceProvider>
              <BidsProvider>
                <CommentProvider>
                  <ZipCodeProvider>{children}</ZipCodeProvider>
                </CommentProvider>
              </BidsProvider>
            </ListAnounceProvider>
          </RegisterAuctionProvider>
        </ActivateProvider>
      </UserProvider>
    </RegisterProvider>
  );
};

export default Providers;
