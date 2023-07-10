import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const UserShopList = atom({
  key: "UserShopList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const UserCardsList = atom({
  key: "UserCardsList",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const chosenCard = atom({
  key: "chosenCard",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
