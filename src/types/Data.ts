export interface User {
  _id: string;
  username: string;
  __v: number;
}

export interface Data {
  _id: string;
  title: string;
  link: string;
  tags: string[];
  UserID: User;
  Type: string;
  __v: number;
}