export interface IResBids {
  id: string;
  value: string;
  date: string;
  topBid: boolean;
  announcementId: string;
  user: {
    id: string;
    name: string;
  };
}
