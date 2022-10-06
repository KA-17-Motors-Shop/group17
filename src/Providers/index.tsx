import React from "react";
import { ZipCodeProvider } from "./Address/cepValidation";
import { UserProvider } from "./User";
import { RegisterProvider } from "./User/register";
import { ActivateProvider } from "./User/activateUser";
import { ListAnounceProvider } from "./Announces/listAll";
import { RegisterAnnounceProvider } from "./Announces/register";
import { BidsProvider } from "./Bids";
import { CommentProvider } from "./Comments";
import { UpdateUserProvider } from "./User/updateUser";
import { PasswordUserProvider } from "./User/passwordUser";
import { ListCreateAddressProvider } from "./Address/listCreateAddress";
import { DeleteUpdateAddressProvider } from "./Address/deleteUpdateAddress";
import { FiltersProviders } from "./Filters";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <RegisterProvider>
      <UserProvider>
        <UpdateUserProvider>
          <PasswordUserProvider>
            <ActivateProvider>
              <RegisterAnnounceProvider>
                <ListAnounceProvider>
                  <BidsProvider>
                    <ListCreateAddressProvider>
                      <DeleteUpdateAddressProvider>
                        <CommentProvider>
                          <FiltersProviders>
                            <ZipCodeProvider>{children}</ZipCodeProvider>
                          </FiltersProviders>
                        </CommentProvider>
                      </DeleteUpdateAddressProvider>
                    </ListCreateAddressProvider>
                  </BidsProvider>
                </ListAnounceProvider>
              </RegisterAnnounceProvider>
            </ActivateProvider>
          </PasswordUserProvider>
        </UpdateUserProvider>
      </UserProvider>
    </RegisterProvider>
  );
};

export default Providers;
