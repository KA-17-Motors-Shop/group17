import React, { createContext, useContext } from "react";
import { IResComment } from "../../interfaces/comments";
import { motorShopAPI } from "../../services/urls.api";

interface IContext {
  getCommentsAnnounce: (id: string) => Promise<IResComment[]>;
}

export const CommentContext = createContext({} as IContext);

export const CommentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const getCommentsAnnounce = async (id: string) => {
    return await motorShopAPI
      .get(`/comment/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommentContext.Provider value={{ getCommentsAnnounce }}>
      {children}
    </CommentContext.Provider>
  );
};

export const useComments = () => useContext(CommentContext);
