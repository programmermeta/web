import { atom } from "jotai";
import { User } from "../types";

export const userAtom = atom<User | null>(null);
export const refreshAtom = atom<boolean>(true);
