import { observable } from "@legendapp/state";

export type UserAuth = {
  accessToken: string;
};

export const auth$ = observable<UserAuth | null>(null);
