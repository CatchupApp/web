import { createContext } from "react";

export interface User {
  id: string;
  username: string;
  fullname: string;
  teacher: boolean;
}

// User is unauthenticated by default
export const UserContext = createContext<[User | null, Function]>([
  null,
  (user: User) => {},
]);
