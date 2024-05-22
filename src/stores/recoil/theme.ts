import { atom } from 'recoil';

export const themeDarkState = atom<boolean>({
  key: 'themeDarkState',
  default: false,
});