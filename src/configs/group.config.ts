import { v4 } from "uuid";
import { IGroup } from "../interfaces/group.interface";

export const groupList: IGroup[] = [
  {
    id: v4(),
    name: "Masshiro na Canvas",
    twitter: "info_shirokyan",
    instagram: "shirokyan_staff",
    tiktok: "shirokyan_official",
  },
  {
    id: v4(),
    name: "Circle Crusher",
    twitter: "circle_crusher3",
    instagram: null,
    tiktok: null,
  },
  {
    id: v4(),
    name: "Hiyorna",
    twitter: "hiyorna_idol",
    instagram: null,
    tiktok: null,
  },
];
