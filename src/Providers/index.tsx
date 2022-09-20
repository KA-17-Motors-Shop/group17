import React from "react";
import { ZipCodeProvider } from "./User/cepValidation";
import { LoginProvider } from "./User/login";
import { RegisterProvider } from "./User/register";
import { ActivateProvider } from "./User/activateUser";
import { ListAnounceProvider } from "./Auction/listAll";
import { RegisterAuctionProvider } from "./Auction/register";
import { BidsProvider } from "./Bids";
import { CommentProvider } from "./Comments";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
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
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
