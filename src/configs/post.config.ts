import { v4 } from "uuid";
import { IPost } from "../interfaces/post.interface";
import { userList } from "./user.config";
import { oshiList } from "./oshi.config";

export const postList: IPost[] = [
  {
    id: v4(),
    userId: userList[0].id,
    oshiId: [oshiList[0].id],
    caption: "First cheki with beloved <3",
    images: [
      "https://pbs.twimg.com/media/GIYfWduawAAyctY?format=jpg&name=large",
    ],
    createdAt: Date.now(),
  },
  {
    id: v4(),
    userId: userList[0].id,
    oshiId: [oshiList[1].id],
    caption: "Hiroshima date <3",
    images: [
      "https://pbs.twimg.com/media/GROignga8AApTOr?format=jpg&name=large",
      "https://pbs.twimg.com/media/F-pmAShaoAA2FIu?format=jpg&name=medium",
    ],
    createdAt: Date.now(),
  },
  {
    id: v4(),
    userId: userList[0].id,
    oshiId: [],
    caption: "I miss my oshi...",
    images: [],
    createdAt: Date.now(),
  },
];
