import { IMenu } from "../interfaces/menu.interface";

export const menuList: IMenu[] = [
  {
    id: "home",
    name: "Home",
    fullPath: "/home",
    children: [],
  },
  {
    id: "timeline",
    name: "Timeline",
    fullPath: "/timeline",
    children: [],
  },
  {
    id: "oshi",
    name: "Oshi",
    fullPath: "/oshi",
    children: [
      {
        id: "detail",
        name: "Oshi Detail",
        fullPath: "/oshi/:id",
        children: [],
      },
    ],
  },
];
