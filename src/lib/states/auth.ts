import { observable } from "@legendapp/state";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";
import { ObservablePersistLocalStorage } from "@legendapp/state/persist-plugins/local-storage";
import { configureObservableSync, syncObservable } from "@legendapp/state/sync";

enableReactTracking({
  auto: true,
});

configureObservableSync({
  persist: {
    plugin: ObservablePersistLocalStorage,
  },
});

export type UserAuth = {
  accessToken: string;
};

export const auth$ = observable<UserAuth | null>(null);

syncObservable(auth$, {
  persist: {
    name: "auth",
  },  
});
