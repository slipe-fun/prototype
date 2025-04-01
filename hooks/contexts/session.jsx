import { useContext, createContext } from "react";
import { Preferences } from '@capacitor/preferences';

export const store = {
	set: async (key, value) => await Preferences.set({ key, value: JSON.stringify(value) }),
	get: async (key) => JSON.parse((await Preferences.get({ key })).value)
}

export const SessionContext = createContext(null);

export const SessionContextProvider = ({ children }) => {
	return <SessionContext.Provider value={{ token: store.get("token"), store }}>{children}</SessionContext.Provider>;
};

export const useStorage = () => useContext(SessionContext);