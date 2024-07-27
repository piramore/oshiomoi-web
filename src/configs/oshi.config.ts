import { v4 } from "uuid";
import { IOshi } from "../interfaces/oshi.interface";
import { groupList } from "./group.config";

export const oshiList: IOshi[] = [
  {
    id: v4(),
    name: "Mugita Hikaru",
    nickname: "Mugi-chan",
    image:
      "https://pbs.twimg.com/profile_images/1806725793688727553/nZ_zWCvm_400x400.jpg",
    groupId: groupList[0].id,
    twitter: ["hkr_shirokyan"],
    instagram: ["m_hikaranai"],
    tiktok: ["m_hikaranai"],
  },
  {
    id: v4(),
    name: "Mattaku Gyaku de Yume Riron",
    nickname: "Yume-chan",
    image:
      "https://pbs.twimg.com/profile_images/1726206905755013120/EacxDLwX_400x400.jpg",
    groupId: groupList[1].id,
    twitter: ["yume_cccr"],
    instagram: ["pyrokinesis918"],
    tiktok: ["yumechan918"],
  },
  {
    id: v4(),
    name: "Arata Riku",
    nickname: "Riku",
    image:
      "https://pbs.twimg.com/profile_images/1803035590356787201/DKqir_DZ_400x400.jpg",
    groupId: groupList[2].id,
    twitter: ["riku_hiyorna"],
    instagram: ["riku_hiyorna"],
    tiktok: [],
  },
];
