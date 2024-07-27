import { v4 } from "uuid";
import { IUser } from "../interfaces/user.interface";

export const userList: IUser[] = [
  {
    id: v4(),
    name: "ぴら",
    username: "piramore",
  },
];
