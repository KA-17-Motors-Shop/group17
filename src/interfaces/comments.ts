export interface IResComment {
  announcementId: string;
  user: {
    id: string;
    name: string;
  };
  comment: string;
  id: string;
  publishedData: string;
}
